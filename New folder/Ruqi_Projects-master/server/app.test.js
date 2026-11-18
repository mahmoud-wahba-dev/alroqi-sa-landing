import assert from 'node:assert/strict';
import { after, before, describe, it } from 'node:test';
import { createApp } from './app.js';

const validSubmission = {
  fullName: 'Test Customer',
  phone: '٠٥٠١٢٣٤٥٦٧',
  email: 'customer@example.com',
  city: 'Riyadh',
  serviceType: 'Real estate development',
  projectDetails: 'Please contact me.',
};

describe('consultation API', () => {
  let server;
  let baseUrl;
  let sentMessages;

  before(async () => {
    sentMessages = [];
    const mailer = {
      sender: 'website@example.com',
      async sendMail(message) {
        sentMessages.push(message);
        return { accepted: ['alruqiprojects@gmail.com'] };
      },
    };
    server = createApp({ mailer, rateLimit: { maxRequests: 20 } }).listen(0, '127.0.0.1');
    await new Promise((resolve) => server.once('listening', resolve));
    baseUrl = `http://127.0.0.1:${server.address().port}`;
  });

  after(async () => {
    await new Promise((resolve, reject) => {
      server.close((error) => error ? reject(error) : resolve());
    });
  });

  it('validates input and sends accepted inquiries to the company inbox', async () => {
    const response = await fetch(`${baseUrl}/api/consultations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validSubmission),
    });

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { accepted: true });
    assert.equal(sentMessages.length, 1);
    assert.equal(sentMessages[0].to, 'alruqiprojects@gmail.com');
    assert.equal(sentMessages[0].replyTo, validSubmission.email);
    assert.match(sentMessages[0].text, /Mobile number: 0501234567/);
  });

  it('rejects invalid email and mobile numbers without sending email', async () => {
    for (const data of [
      { ...validSubmission, email: 'not-an-email' },
      { ...validSubmission, phone: '123' },
    ]) {
      const response = await fetch(`${baseUrl}/api/consultations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      assert.equal(response.status, 400);
      assert.deepEqual(await response.json(), { error: 'INVALID_SUBMISSION' });
    }
    assert.equal(sentMessages.length, 1);
  });

  it('returns an error and does not claim acceptance when email sending fails', async () => {
    const failingServer = createApp({
      mailer: { sender: 'website@example.com', sendMail: async () => { throw new Error('SMTP failure'); } },
    }).listen(0, '127.0.0.1');
    await new Promise((resolve) => failingServer.once('listening', resolve));

    try {
      const response = await fetch(`http://127.0.0.1:${failingServer.address().port}/api/consultations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validSubmission),
      });
      assert.equal(response.status, 502);
      assert.deepEqual(await response.json(), { error: 'EMAIL_DELIVERY_FAILED' });
    } finally {
      await new Promise((resolve, reject) => {
        failingServer.close((error) => error ? reject(error) : resolve());
      });
    }
  });

  it('does not claim acceptance when the SMTP server rejects the company address', async () => {
    const rejectedServer = createApp({
      mailer: {
        sender: 'website@example.com',
        sendMail: async () => ({ accepted: [], rejected: ['alruqiprojects@gmail.com'] }),
      },
    }).listen(0, '127.0.0.1');
    await new Promise((resolve) => rejectedServer.once('listening', resolve));

    try {
      const response = await fetch(`http://127.0.0.1:${rejectedServer.address().port}/api/consultations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validSubmission),
      });
      assert.equal(response.status, 502);
      assert.deepEqual(await response.json(), { error: 'EMAIL_DELIVERY_FAILED' });
    } finally {
      await new Promise((resolve, reject) => {
        rejectedServer.close((error) => error ? reject(error) : resolve());
      });
    }
  });

  it('rejects inquiries when SMTP is not configured', async () => {
    const unconfiguredServer = createApp().listen(0, '127.0.0.1');
    await new Promise((resolve) => unconfiguredServer.once('listening', resolve));

    try {
      const response = await fetch(`http://127.0.0.1:${unconfiguredServer.address().port}/api/consultations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validSubmission),
      });
      assert.equal(response.status, 503);
      assert.deepEqual(await response.json(), { error: 'MAIL_NOT_CONFIGURED' });
    } finally {
      await new Promise((resolve, reject) => {
        unconfiguredServer.close((error) => error ? reject(error) : resolve());
      });
    }
  });
});
