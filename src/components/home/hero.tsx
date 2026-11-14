"use client";

import { Fragment, useEffect, useRef } from "react";

/*
 * Home hero. Dark surface, so per the brand rule: white text, gold accent.
 * Copy is placeholder — edit the arrays below; per-word reveal delays are
 * computed from each line's start time and step.
 */

const topTagline = "Welcome to The Human Signal — Powering your AI Adoption.";
const headline = "The AI works. The rollout doesn’t.";
const subheadline =
  "“ROI”: Pushed from the top. Ignored on the floor. Sound familiar?";
const bottomTagline = "AI adoption, from the floor up.";

function Words({
  text,
  start,
  step,
}: {
  text: string;
  start: number;
  step: number;
}) {
  // A real space between words keeps the text readable when copied or
  // read by a screen reader; each word animates in its own span.
  return text.split(" ").map((word, i, words) => (
    <Fragment key={i}>
      <span
        className="hero-word"
        style={{ animationDelay: `${start + i * step}ms` }}
      >
        {word}
      </span>
      {i < words.length - 1 && " "}
    </Fragment>
  ));
}

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const glow = glowRef.current;
    if (!root || !glow) return;

    // Cursor-following maroon glow
    function onMouseMove(e: MouseEvent) {
      glow!.style.left = `${e.clientX - 192}px`;
      glow!.style.top = `${e.clientY - 192}px`;
      glow!.style.opacity = "1";
    }
    function onMouseLeave() {
      glow!.style.opacity = "0";
    }

    // Gold click ripple
    function onClick(e: MouseEvent) {
      const ripple = document.createElement("div");
      ripple.className = "hero-ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    }

    // Start floating elements on first scroll
    function onScroll() {
      root!
        .querySelectorAll<HTMLElement>(".hero-float")
        .forEach((el, i) => {
          setTimeout(() => (el.style.animationPlayState = "running"), i * 200);
        });
      window.removeEventListener("scroll", onScroll);
    }

    root.addEventListener("mousemove", onMouseMove);
    root.addEventListener("mouseleave", onMouseLeave);
    root.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll);

    return () => {
      root.removeEventListener("mousemove", onMouseMove);
      root.removeEventListener("mouseleave", onMouseLeave);
      root.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative min-h-screen w-full overflow-hidden bg-black bg-linear-to-br from-black via-black to-maroon/40 text-white"
    >
      {/* Grid + detail dots */}
      <svg
        className="absolute inset-0 h-full w-full text-white"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.06"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
        <line x1="0" y1="20%" x2="100%" y2="20%" className="hero-grid-line" style={{ animationDelay: "0.5s" }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" className="hero-grid-line" style={{ animationDelay: "1s" }} />
        <line x1="20%" y1="0" x2="20%" y2="100%" className="hero-grid-line" style={{ animationDelay: "1.5s" }} />
        <line x1="80%" y1="0" x2="80%" y2="100%" className="hero-grid-line" style={{ animationDelay: "2s" }} />
        <line x1="50%" y1="0" x2="50%" y2="100%" className="hero-grid-line hero-grid-line-faint" style={{ animationDelay: "2.5s" }} />
        <line x1="0" y1="50%" x2="100%" y2="50%" className="hero-grid-line hero-grid-line-faint" style={{ animationDelay: "3s" }} />
        <circle cx="20%" cy="20%" r="2" className="hero-dot" style={{ animationDelay: "3s" }} />
        <circle cx="80%" cy="20%" r="2" className="hero-dot" style={{ animationDelay: "3.2s" }} />
        <circle cx="20%" cy="80%" r="2" className="hero-dot" style={{ animationDelay: "3.4s" }} />
        <circle cx="80%" cy="80%" r="2" className="hero-dot" style={{ animationDelay: "3.6s" }} />
        <circle cx="50%" cy="50%" r="1.5" className="hero-dot" style={{ animationDelay: "4s" }} />
      </svg>

      {/* Corner marks */}
      <div className="hero-corner top-4 left-4 md:top-8 md:left-8 border-t border-l" style={{ animationDelay: "4s" }} />
      <div className="hero-corner top-4 right-4 md:top-8 md:right-8 border-t border-r" style={{ animationDelay: "4.2s" }} />
      <div className="hero-corner bottom-4 left-4 md:bottom-8 md:left-8 border-b border-l" style={{ animationDelay: "4.4s" }} />
      <div className="hero-corner bottom-4 right-4 md:bottom-8 md:right-8 border-b border-r" style={{ animationDelay: "4.6s" }} />

      {/* Floating particles (start on first scroll) */}
      <div className="hero-float" style={{ top: "25%", left: "15%", animationDelay: "5s" }} />
      <div className="hero-float" style={{ top: "60%", left: "85%", animationDelay: "5.5s" }} />
      <div className="hero-float" style={{ top: "40%", left: "10%", animationDelay: "6s" }} />
      <div className="hero-float" style={{ top: "75%", left: "90%", animationDelay: "6.5s" }} />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between px-8 py-12 md:px-16 md:py-20">
        {/* Top tagline */}
        <div className="flex flex-col items-center text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold md:text-sm">
            <Words text={topTagline} start={0} step={200} />
          </p>
          <div className="mt-4 h-px w-16 bg-linear-to-r from-transparent via-gold/40 to-transparent" />
        </div>

        {/* Headline */}
        <div className="relative mx-auto max-w-5xl text-center">
          <h1 className="font-serif text-4xl font-light leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            <span className="mb-4 block md:mb-6">
              <Words text={headline} start={1600} step={150} />
            </span>{" "}
            <span className="block font-sans text-xl font-light leading-relaxed text-white/70 md:text-2xl lg:text-3xl">
              <Words text={subheadline} start={2600} step={150} />
            </span>
          </h1>
          <div className="hero-fade absolute top-1/2 -left-8 h-px w-4 bg-gold/30" style={{ animationDelay: "3.5s" }} />
          <div className="hero-fade absolute top-1/2 -right-8 h-px w-4 bg-gold/30" style={{ animationDelay: "3.7s" }} />
        </div>

        {/* Bottom tagline */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 h-px w-16 bg-linear-to-r from-transparent via-gold/40 to-transparent" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/70 md:text-sm">
            <Words text={bottomTagline} start={4400} step={150} />
          </p>
          <div className="hero-fade mt-6 flex justify-center gap-4" style={{ animationDelay: "4.5s" }}>
            <span className="h-1 w-1 rounded-full bg-gold/40" />
            <span className="h-1 w-1 rounded-full bg-gold/70" />
            <span className="h-1 w-1 rounded-full bg-gold/40" />
          </div>
        </div>
      </div>

      {/* Cursor glow */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed h-96 w-96 rounded-full bg-[radial-gradient(circle,--theme(--color-maroon/35%)_0%,transparent_70%)] opacity-0 blur-3xl transition-all duration-500 ease-out"
      />
    </section>
  );
}
