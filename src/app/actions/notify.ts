'use server';

export interface NotifyResult {
  ok: boolean;
  error?: string;
}

export async function subscribeToNotify(
  _prev: NotifyResult,
  formData: FormData,
): Promise<NotifyResult> {
  const raw = formData.get('email');
  if (!raw || typeof raw !== 'string') {
    return { ok: false, error: 'Please enter your email address.' };
  }

  const email = raw.trim().toLowerCase();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid) {
    return { ok: false, error: "That doesn't look like a valid email." };
  }

  // Phase 7: wire to Resend / email provider
  console.log('[notify] new subscriber:', email);

  return { ok: true };
}
