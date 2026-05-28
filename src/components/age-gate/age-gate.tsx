'use client';

import { useEffect, useRef, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

// ─── External cookie store ───────────────────────────────────────────────────

const COOKIE = 'scout_age_ok';
const DAYS = 30;

type Listener = () => void;
let listeners: Listener[] = [];

function notify() {
  listeners.forEach((l) => l());
}

function subscribe(cb: Listener) {
  listeners = [...listeners, cb];
  return () => {
    listeners = listeners.filter((l) => l !== cb);
  };
}

function hasCookie(): boolean {
  if (typeof document === 'undefined') return true;
  return document.cookie.split(';').some((c) => c.trim().startsWith(`${COOKIE}=`));
}

function getSnapshot() {
  return hasCookie();
}

function getServerSnapshot() {
  return true;
}

export function markAgeVerified() {
  const exp = new Date();
  exp.setDate(exp.getDate() + DAYS);
  document.cookie = `${COOKIE}=1; expires=${exp.toUTCString()}; path=/; SameSite=Lax`;
  notify();
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const SELECT =
  'flex-1 bg-cream border border-navy/20 text-navy font-mono text-[12px] tracking-[0.08em] px-2 py-3 outline-none focus:border-navy transition-colors duration-200 appearance-none cursor-pointer';

const FOCUSABLE = 'select, button, a[href], input, [tabindex]:not([tabindex="-1"])';

function isAtLeast18(d: number, m: number, y: number): boolean {
  const today = new Date();
  const cutoff = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
  return new Date(y, m - 1, d) <= cutoff;
}

// ─── Public component ────────────────────────────────────────────────────────

export default function AgeGate() {
  const verified = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (verified) return null;
  return <AgeGateModal />;
}

// ─── Modal ───────────────────────────────────────────────────────────────────

function AgeGateModal() {
  const dialogRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

  // Autofocus first select + focus trap on Tab/Shift-Tab
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const first = dialog.querySelector<HTMLElement>(FOCUSABLE);
    first?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== 'Tab') return;
      const all = Array.from(dialog!.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (all.length === 0) return;
      const firstEl = all[0]!;
      const lastEl = all[all.length - 1]!;
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }

    dialog.addEventListener('keydown', onKeyDown);
    return () => dialog.removeEventListener('keydown', onKeyDown);
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const d = Number(fd.get('day'));
    const m = Number(fd.get('month'));
    const y = Number(fd.get('year'));

    const errorEl = e.currentTarget.querySelector<HTMLElement>('[data-error]');

    if (!d || !m || !y) {
      if (errorEl) errorEl.textContent = 'Please complete your date of birth.';
      return;
    }

    if (errorEl) errorEl.textContent = '';

    if (isAtLeast18(d, m, y)) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        markAgeVerified();
        return;
      }

      const el = dialogRef.current;
      if (!el) {
        markAgeVerified();
        return;
      }

      const inner = el.querySelector('.bg-cream');

      const tl = gsap.timeline({
        onComplete: () => {
          markAgeVerified();
        },
      });

      tl.to(el, {
        opacity: 0,
        duration: 0.35,
        ease: 'power3.inOut',
      }, 0);

      if (inner) {
        tl.to(inner, {
          y: 24,
          scale: 0.96,
          duration: 0.35,
          ease: 'power3.inOut',
        }, 0);
      }
    } else {
      window.location.assign('https://drinkwise.org.au');
    }
  }

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-heading"
      className="bg-navy/90 fixed inset-0 z-[9999] flex items-center justify-center p-6 backdrop-blur-sm"
      style={{ animation: 'ageFade 0.25s ease-out' }}
    >
      <style>{`@keyframes ageFade { from { opacity: 0 } to { opacity: 1 } }`}</style>

      <div
        className="bg-cream w-full max-w-sm px-8 py-10 text-center md:px-12"
        style={{ borderRadius: 2 }}
      >
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/brand/scout-logo.png"
            alt="Scout Brewing &amp; Co."
            width={72}
            height={72}
            priority
          />
        </div>

        {/* Eyebrow */}
        <p className="text-navy/45 mb-5 font-mono text-[10px] tracking-[0.28em] uppercase">
          ◆ 18+ ONLY
        </p>

        {/* Headline */}
        <h2
          id="age-gate-heading"
          className="font-display text-navy mb-3 text-[38px] leading-none tracking-tight"
        >
          Confirm your age.
        </h2>

        {/* Subtext */}
        <p className="text-navy/55 mb-8 font-serif text-[14px] leading-snug italic">
          You must be 18 or older to enter.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-1 flex gap-2">
            <select
              name="day"
              aria-label="Day of birth"
              defaultValue=""
              className={SELECT}
              style={{ borderRadius: 2 }}
            >
              <option value="" disabled>
                DD
              </option>
              {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                <option key={d} value={d}>
                  {String(d).padStart(2, '0')}
                </option>
              ))}
            </select>

            <select
              name="month"
              aria-label="Month of birth"
              defaultValue=""
              className={SELECT}
              style={{ borderRadius: 2 }}
            >
              <option value="" disabled>
                MM
              </option>
              {MONTHS.map((name, i) => (
                <option key={i} value={i + 1}>
                  {name.toUpperCase()}
                </option>
              ))}
            </select>

            <select
              name="year"
              aria-label="Year of birth"
              defaultValue=""
              className={`${SELECT} flex-[1.4]`}
              style={{ borderRadius: 2 }}
            >
              <option value="" disabled>
                YYYY
              </option>
              {Array.from({ length: 100 }, (_, i) => currentYear - i).map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          {/* Error — textContent set imperatively to avoid re-render */}
          <p
            data-error
            role="alert"
            aria-live="polite"
            className="text-red mb-3 h-4 font-mono text-[10px] tracking-[0.12em]"
          />

          <button
            type="submit"
            className="bg-red text-cream hover:bg-navy focus-visible:ring-red mt-2 w-full py-4 font-mono text-[11px] font-bold tracking-[0.22em] uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            style={{ borderRadius: 2 }}
          >
            ENTER →
          </button>
        </form>

        <p className="text-navy/35 mt-7 font-mono text-[9px] leading-relaxed tracking-[0.1em] uppercase">
          By entering you confirm you are of legal drinking age in your country.{' '}
          <a
            href="https://drinkwise.org.au"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy/55 underline transition-colors duration-200"
          >
            DrinkWise.org.au ↗
          </a>
        </p>
      </div>
    </div>
  );
}
