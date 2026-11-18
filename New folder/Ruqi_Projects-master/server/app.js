import express from 'express';

const COMPANY_EMAIL = 'alruqiprojects@gmail.com';
const EMAIL_PATTERN = /^[^\s@.]+(?:\.[^\s@.]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/;
const EMAIL_FIELDS = [
  ['Full name', 'fullName'],
  ['Mobile number', 'phone'],
  ['Email address', 'email'],
  ['City', 'city'],
  ['Service type', 'serviceType'],
  ['Project or inquiry details', 'projectDetails'],
];

function normalizePhone(phone) {
  return phone
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 0x660))
    .replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 0x6f0))
    .trim();
}

function isValidMobile(phone) {
  const normalized = normalizePhone(phone);
  if (!/^\+?[\d\s()-]+$/.test(normalized)) return false;

  const digits = normalized.replace(/\D/g, '');
  if (
    digits.length < 8 ||
    digits.length > 15 ||
    (digits.startsWith('0') && !digits.startsWith('05'))
  ) {
    return false;
  }

  if (digits.startsWith('05')) return digits.length === 10;
  if (digits.startsWith('966')) return digits.length === 12 && digits[3] === '5';
  return digits[0] !== '0';
}

function validateSubmission(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null;

  const fieldLimits = {
    fullName: 120,
    phone: 40,
    email: 254,
    city: 100,
    serviceType: 120,
    projectDetails: 5000,
  };
  const data = {};

  for (const [key, limit] of Object.entries(fieldLimits)) {
    const value = body[key] ?? '';
    if (typeof value !== 'string' || value.length > limit) return null;
    data[key] = value.trim();
  }

  if (!data.fullName || !data.phone || !data.email || !data.serviceType) return null;
  if (!EMAIL_PATTERN.test(data.email) || !isValidMobile(data.phone)) return null;

  data.phone = normalizePhone(data.phone);
  return data;
}

function createRateLimiter({ maxRequests = 5, windowMs = 15 * 60 * 1000 } = {}) {
  const clients = new Map();

  return (req, res, next) => {
    const now = Date.now();
    const client = clients.get(req.ip);
    if (!client || client.resetAt <= now) {
      if (!client && clients.size >= 5000) {
        for (const [address, entry] of clients) {
          if (entry.resetAt <= now) clients.delete(address);
        }
      }
      if (!client && clients.size >= 5000) {
        return res.status(503).json({ error: 'RATE_LIMIT_UNAVAILABLE' });
      }
      clients.set(req.ip, { count: 1, resetAt: now + windowMs });
      return next();
    }

    if (client.count >= maxRequests) {
      res.set('Retry-After', String(Math.ceil((client.resetAt - now) / 1000)));
      return res.status(429).json({ error: 'TOO_MANY_REQUESTS' });
    }

    client.count += 1;
    return next();
  };
}

export function createApp({ mailer, rateLimit } = {}) {
  const app = express();
  app.disable('x-powered-by');
  app.use(express.json({ limit: '16kb' }));

  app.get('/sitemap.xml', (req, res) => {
    const origin = process.env.VITE_SITE_URL || `${req.protocol}://${req.get('host')}`;
    const pages = ['', '/about', '/real-estate-development', '/projects', '/services', '/contact'];
    const urls = pages.flatMap((page) => [page, `/en${page}`]);
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map((page) => {
      const ar = page.startsWith('/en') ? page.replace(/^\/en/, '') || '/' : page || '/';
      const en = page.startsWith('/en') ? page : `/en${page}`;
      return `  <url><loc>${origin}${page || '/'}</loc><xhtml:link rel="alternate" hreflang="ar-SA" href="${origin}${ar || '/'}"/><xhtml:link rel="alternate" hreflang="en-SA" href="${origin}${en}"/><xhtml:link rel="alternate" hreflang="x-default" href="${origin}${ar || '/'}"/></url>`;
    }).join('\n')}
</urlset>`;
    res.type('application/xml').send(xml);
  });

  app.post('/api/consultations', createRateLimiter(rateLimit), async (req, res) => {
    const data = validateSubmission(req.body);
    if (!data) return res.status(400).json({ error: 'INVALID_SUBMISSION' });
    if (!mailer) return res.status(503).json({ error: 'MAIL_NOT_CONFIGURED' });

    const text = EMAIL_FIELDS
      .map(([label, key]) => `${label}: ${data[key] || '-'}`)
      .join('\n\n');

    try {
      const result = await mailer.sendMail({
        from: { name: process.env.SMTP_FROM_NAME || 'Al-Ruqi Projects', address: mailer.sender },
        to: COMPANY_EMAIL,
        replyTo: data.email,
        subject: 'New website inquiry',
        text,
      });
      const recipientAccepted = result?.accepted?.some((recipient) => {
        const address = typeof recipient === 'string' ? recipient : recipient?.address;
        return address?.toLowerCase() === COMPANY_EMAIL;
      });
      if (!recipientAccepted) {
        console.error('[Inquiry API] SMTP did not accept the company recipient.');
        return res.status(502).json({ error: 'EMAIL_DELIVERY_FAILED' });
      }
      return res.status(200).json({ accepted: true });
    } catch (error) {
      console.error('[Inquiry API] Email delivery was rejected by the SMTP server.', error.code || 'UNKNOWN_ERROR');
      return res.status(502).json({ error: 'EMAIL_DELIVERY_FAILED' });
    }
  });

  app.use((error, req, res, next) => {
    if (error.type === 'entity.parse.failed') {
      return res.status(400).json({ error: 'INVALID_JSON' });
    }
    if (error.type === 'entity.too.large') {
      return res.status(413).json({ error: 'REQUEST_TOO_LARGE' });
    }
    console.error('[Inquiry API] Request failed.', error.message);
    return res.status(500).json({ error: 'INTERNAL_SERVER_ERROR' });
  });

  return app;
}
