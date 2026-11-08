"use client";

import { useRef } from "react";
import { GridVignetteBackground } from "@/components/ui/grid-vignette-background";
import { useReveal } from "@/lib/use-reveal";

/*
 * Literacy survey band. Dark (maroon) surface, so per the brand rule:
 * white text, gold accent, gold CTA.
 */

const surveyUrl = "https://literacy.salafia.io/";

export function LiteracyBand() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section
      id="literacy"
      ref={sectionRef}
      className="relative isolate w-full overflow-hidden bg-maroon text-white"
    >
      <GridVignetteBackground
        className="-z-10 text-white/10"
        size={48}
        x={70}
        horizontalVignetteSize={60}
        verticalVignetteSize={90}
        intensity={70}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-br from-transparent via-transparent to-maroon-deep/70"
      />

      <div className="reveal mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20 md:flex-row md:items-center md:justify-between md:gap-16 md:px-10 md:py-24">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-white md:text-5xl">
            Where does your AI literacy actually sit?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            Most people overestimate what they know about AI and underestimate
            what it changes about their work. Ten minutes, anonymous, no email
            required. You&apos;ll leave with a clearer picture of your own
            baseline.
          </p>
        </div>
        <a
          href={surveyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-md bg-gold px-6 py-3.5 text-sm font-medium text-black shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_var(--color-gold)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:self-auto"
        >
          Take the Survey →
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </section>
  );
}
