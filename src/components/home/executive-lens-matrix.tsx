"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowRight, Cpu, ShieldAlert, Users } from "lucide-react";
import {
  EXECUTIVE_LENSES,
  type ExecutiveRole,
} from "@/lib/executive-perspectives";
import { useReveal } from "@/lib/use-reveal";

/*
 * §02 Three Lenses. Light surface, so per the brand rule:
 * ink/body text, maroon accent, maroon CTA.
 */

/** Deliberate order: the people lens frames the other two. */
const TAB_ORDER: ExecutiveRole[] = ["CHRO", "CTO", "CISO"];

const ICONS = { CHRO: Users, CTO: Cpu, CISO: ShieldAlert } as const;

const blockLabel =
  "font-mono text-xs uppercase tracking-[0.18em] text-muted";

export function ExecutiveLensMatrix() {
  const [active, setActive] = useState<ExecutiveRole>("CHRO");
  const tabRefs = useRef<Partial<Record<ExecutiveRole, HTMLButtonElement>>>({});
  const sectionRef = useRef<HTMLElement>(null);
  const lens = EXECUTIVE_LENSES[active];

  useReveal(sectionRef);

  /** Arrow keys move between tabs, per the ARIA tabs pattern. */
  function onTabKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const i = TAB_ORDER.indexOf(active);
    const next = TAB_ORDER[(i + dir + TAB_ORDER.length) % TAB_ORDER.length];
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <section
      id="lenses"
      ref={sectionRef}
      className="w-full scroll-mt-16 bg-white py-24 text-ink md:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <p className="reveal font-mono text-xs tracking-[0.2em] text-muted">
          §02 · LENSES
        </p>

        {/* Intro */}
        <div className="mt-10 grid gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <p className="reveal flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-maroon">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-maroon/40 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-maroon" />
              </span>
              The Three Lenses
            </p>
            <h2 className="reveal mt-5 font-serif text-3xl leading-tight tracking-tight text-ink md:text-5xl">
              The same rollout looks like{" "}
              <em className="text-maroon">three different problems</em>,
              depending on who is looking at it.
            </h2>
          </div>
          <div className="reveal self-end md:col-span-5">
            <p className="border-l-2 border-maroon pl-5 text-lg leading-relaxed text-body">
              Adoption stalls when the people signing it off are each solving a
              different problem. The CTO buys licences. The CHRO absorbs the
              anxiety. The CISO builds walls. Every one of them is reading a
              real signal — and none of them is reading the whole one.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div
          className="reveal mt-16 grid gap-3 sm:grid-cols-3"
          role="tablist"
          aria-label="Executive lens"
        >
          {TAB_ORDER.map((role) => {
            const tab = EXECUTIVE_LENSES[role];
            const Icon = ICONS[role];
            const selected = role === active;
            return (
              <button
                key={role}
                ref={(el) => {
                  if (el) tabRefs.current[role] = el;
                }}
                id={`lens-tab-${role.toLowerCase()}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="lens-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(role)}
                onKeyDown={onTabKeyDown}
                className={`group flex items-center gap-4 rounded-lg border p-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon ${
                  selected
                    ? "border-maroon bg-card shadow-[0_1px_0_0_var(--color-maroon)]"
                    : "border-line bg-card/60 hover:border-maroon/40 hover:bg-card"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md transition-colors ${
                    selected
                      ? "bg-maroon text-white"
                      : "bg-maroon-tint text-maroon"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <span className="flex flex-col">
                  <span
                    className={`font-mono text-sm font-medium tracking-wider ${
                      selected ? "text-maroon" : "text-ink"
                    }`}
                  >
                    {role}
                  </span>
                  <span className="text-sm text-muted">{tab.badge}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          id="lens-panel"
          role="tabpanel"
          aria-labelledby={`lens-tab-${active.toLowerCase()}`}
          className="reveal mt-6 rounded-xl border border-line bg-card p-6 md:p-10"
        >
          <div className="flex flex-col gap-6 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className={blockLabel}>Executive Perspective</p>
              <h3 className="mt-3 font-serif text-2xl leading-snug text-ink md:text-3xl">
                {lens.title}
              </h3>
            </div>
            <Link
              href={`/consult?lens=${lens.role.toLowerCase()}`}
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-md bg-maroon px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-maroon-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon md:self-auto"
            >
              Book a {lens.role} briefing
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>

          {/* Fear vs. solution */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-line bg-white p-6">
              <p className={blockLabel}>The fear underneath</p>
              <p className="mt-3 font-serif text-xl leading-snug text-ink">
                {lens.coreFear}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-body">
                <strong className="font-medium text-ink">
                  Why the usual rollout fails here:
                </strong>{" "}
                {lens.traditionalFailure}
              </p>
            </div>

            <div className="rounded-lg border border-maroon/15 bg-maroon-tint p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-maroon">
                What we do instead
              </p>
              <p className="mt-3 font-serif text-xl leading-snug text-maroon">
                Start with the people, not the platform.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-body">
                {lens.solution}
              </p>
            </div>
          </div>

          {/* Questions */}
          <div className="mt-10">
            <p className={blockLabel}>What the {lens.role} needs answered</p>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {lens.keyQuestions.map((q, i) => (
                <li key={q} className="flex gap-5 py-4 text-body">
                  <span
                    className="font-mono text-sm text-maroon"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Intervention path */}
          <div className="mt-10">
            <p className={blockLabel}>How CORE runs for this lens</p>
            <ol className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {lens.interventionPath.map((step, i) => (
                <li
                  key={step.label}
                  className="relative border-t-2 border-maroon pt-4"
                >
                  <p className="font-mono text-xs text-muted">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 font-medium text-ink">{step.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
