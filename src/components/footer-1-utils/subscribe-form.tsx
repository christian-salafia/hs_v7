"use client";

import { useState, type FormEvent } from "react";

/*
 * Newsletter sign-up. NOT CONNECTED: submitting only shows a confirmation.
 * Wire `onSubmit` to the mailing-list provider before launch.
 */
export function SubscribeForm() {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <p role="status" className="text-sm text-gold">
        Thanks — you&apos;re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-sm gap-2">
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-email"
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="you@company.com"
        className="h-10 min-w-0 flex-1 rounded-md border border-white/15 bg-white/5 px-3 text-sm text-white placeholder:text-white/40 transition-colors focus:border-gold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      />
      <button
        type="submit"
        className="h-10 shrink-0 rounded-md bg-gold px-4 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_var(--color-gold)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        Subscribe
      </button>
    </form>
  );
}
