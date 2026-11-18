import assert from 'node:assert/strict';
import { it } from 'node:test';
import { submitConsultation } from './consultationsService.js';

it('sends consultation details to FormSubmit and requires an accepted response', async () => {
  const originalFetch = globalThis.fetch;
  let request;
  globalThis.fetch = async (url, options) => {
    request = { url, options };
    return { ok: true, status: 200 };
  };

  try {
    await submitConsultation({
      fullName: 'Test Customer',
      phone: '+966501234567',
      email: 'customer@example.com',
      city: 'Riyadh',
      serviceType: 'Development',
      projectDetails: 'Please contact me.',
    });

    assert.equal(request.url, 'https://formsubmit.app/f/jcf4p5tjxr');
    assert.equal(request.options.method, 'POST');
    assert.ok(request.options.body instanceof URLSearchParams);
    assert.deepEqual(Object.fromEntries(request.options.body), {
      name: 'Test Customer',
      phone: '+966501234567',
      email: 'customer@example.com',
      _replyto: 'customer@example.com',
      city: 'Riyadh',
      service: 'Development',
      message: 'Please contact me.',
      _subject: 'New website inquiry - Al-Ruqi Projects',
      _template: 'table',
      _gotcha: '',
    });
  } finally {
    globalThis.fetch = originalFetch;
  }
});

it('rejects unsuccessful FormSubmit HTTP responses', async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => ({ ok: false, status: 500 });

  try {
    await assert.rejects(
      submitConsultation({
        fullName: 'Test Customer',
        phone: '+966501234567',
        email: 'customer@example.com',
        city: 'Riyadh',
        serviceType: 'Development',
        projectDetails: '',
      }),
      { message: 'FORM_SUBMISSION_FAILED' },
    );
  } finally {
    globalThis.fetch = originalFetch;
  }
});
