const EMAIL_PATTERN = /^[^\s@.]+(?:\.[^\s@.]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/;
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.app/f/jcf4p5tjxr';

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

export function validateConsultation(data) {
  if (!data.fullName.trim() || !data.phone.trim() || !data.email.trim() || !data.serviceType) {
    return 'required';
  }
  if (!EMAIL_PATTERN.test(data.email.trim())) return 'invalidEmail';
  if (!isValidMobile(data.phone)) return 'invalidPhone';
  return null;
}

export async function submitConsultation(data) {
  const response = await fetch(FORMSUBMIT_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: new URLSearchParams({
      name: data.fullName,
      phone: data.phone,
      email: data.email,
      _replyto: data.email,
      city: data.city,
      service: data.serviceType,
      message: data.projectDetails,
      _subject: 'New website inquiry - Al-Ruqi Projects',
      _template: 'table',
      _gotcha: '',
    }),
  });

  if (!response.ok) {
    console.error(`[Inquiry Form] FormSubmit returned HTTP ${response.status}.`);
    throw new Error('FORM_SUBMISSION_FAILED');
  }
}
