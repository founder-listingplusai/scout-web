'use client';

import { useActionState } from 'react';
import { subscribeToNotify, type NotifyResult } from '@/app/actions/notify';

const initial: NotifyResult = { ok: false };

export default function NotifyForm() {
  const [state, action, pending] = useActionState(subscribeToNotify, initial);

  if (state.ok) {
    return (
      <div className="flex flex-col items-center gap-3 py-4">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full border-2"
          style={{ borderColor: '#cf3238' }}
          aria-hidden="true"
        >
          <span className="text-red font-mono text-lg">✓</span>
        </div>
        <p className="font-display text-navy text-[28px] leading-none tracking-tight">
          You&rsquo;re on the list.
        </p>
        <p className="text-navy/60 font-mono text-[11px] tracking-[0.16em] uppercase">
          We&rsquo;ll be in touch when cases are ready to ship.
        </p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-0">
        <label htmlFor="notify-email" className="sr-only">
          Email address
        </label>
        <input
          id="notify-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="your@email.com"
          disabled={pending}
          className="bg-cream border-navy/25 text-navy placeholder:text-navy/35 focus:border-navy w-full flex-1 border px-4 py-3.5 font-mono text-[13px] tracking-[0.06em] transition-colors duration-200 outline-none sm:rounded-none sm:border-r-0"
          style={{ borderRadius: '2px 0 0 2px' }}
          aria-describedby={state.error ? 'notify-error' : undefined}
        />
        <button
          type="submit"
          disabled={pending}
          className="bg-red text-cream hover:bg-navy focus-visible:ring-red flex-shrink-0 px-7 py-3.5 font-mono text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60"
          style={{ borderRadius: '0 2px 2px 0' }}
        >
          {pending ? 'SENDING…' : 'NOTIFY ME →'}
        </button>
      </div>

      {state.error && (
        <p
          id="notify-error"
          role="alert"
          className="text-red mt-2 font-mono text-[11px] tracking-[0.1em]"
        >
          {state.error}
        </p>
      )}
    </form>
  );
}
