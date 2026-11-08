// Layout adapted from FAQ 5 by Hirael <https://hirael.com/blocks/faqs/faq-05>
// MIT · Mohammad Shehadeh · https://github.com/MohammadShehadeh/hirael

"use client";

import { useRef, type CSSProperties } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useReveal } from "@/lib/use-reveal";

/*
 * §03 The CORE Framework. Light (maroon-tint) surface: ink/body text,
 * maroon accent. Secondary colors are used only on the phase markers,
 * to tell the four sequential phases apart.
 */

type Phase = {
  num: string;
  phase: string;
  name: string;
  desc: string;
  /** Brand token: phase marker color. */
  accent: string;
};

const phases: Phase[] = [
  {
    num: "01",
    phase: "PHASE ONE",
    name: "Culture Audit",
    desc: "Map the actual readiness, resistance, and capability of the people who will use, sponsor, or be affected by AI in your organisation.",
    accent: "var(--color-maroon)",
  },
  {
    num: "02",
    phase: "PHASE TWO",
    name: "Opportunity Design",
    desc: "Identify the use cases where AI compounds human work rather than competing with it — and rank them by feasibility and impact.",
    accent: "var(--color-blue)",
  },
  {
    num: "03",
    phase: "PHASE THREE",
    name: "Readiness Building",
    desc: "Close the gap between current capability and what adoption requires: literacy, governance, infrastructure, and trust.",
    accent: "var(--color-green)",
  },
  {
    num: "04",
    phase: "PHASE FOUR",
    name: "Embedding & Scale",
    desc: "Move from pilot to system. Make the human change durable — not because we said so, but because the work depends on it.",
    accent: "var(--color-maroon)",
  },
];

export function CoreFramework() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section
      id="core"
      ref={sectionRef}
      className="w-full scroll-mt-16 bg-maroon-tint py-16 text-ink md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="reveal grid grid-cols-1 overflow-hidden rounded-xl border border-maroon/15 md:grid-cols-2">
          {/* Intro */}
          <div className="flex flex-col gap-5 border-b border-maroon/15 px-6 pt-10 pb-8 md:border-b-0 md:border-r md:px-10 md:py-14">
            <p className="font-mono text-xs tracking-[0.2em] text-muted">
              §03 · THE CORE FRAMEWORK
            </p>
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-ink md:text-4xl">
              A four-phase methodology for embedding AI where it actually lives
              — in <em className="text-maroon">human work.</em>
            </h2>
            <hr className="w-12 border-0 border-t-2 border-maroon" />
            <p className="max-w-md text-[15px] leading-relaxed text-body">
              CORE turns the vague rhetoric of &ldquo;digital
              transformation&rdquo; into a defensible plan. Each phase has its
              own diagnostic, intervention, and measurement model.
            </p>
          </div>

          {/* Phases */}
          <div className="flex flex-col justify-center bg-card px-6 py-2 md:px-8">
            <Accordion
              type="single"
              collapsible
              defaultValue={phases[0].num}
              className="w-full"
            >
              {phases.map((p) => (
                <AccordionItem
                  key={p.num}
                  value={p.num}
                  style={{ "--accent": p.accent } as CSSProperties}
                >
                  <AccordionTrigger>
                    <span className="flex items-center gap-4">
                      <span
                        aria-hidden="true"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-(--accent)/30 bg-(--accent)/10 font-mono text-xs font-medium text-ink"
                      >
                        {p.num}
                      </span>
                      <span className="flex flex-col">
                        <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-muted">
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-(--accent)"
                          />
                          {p.phase}
                        </span>
                        <span className="mt-0.5 font-serif text-xl leading-snug">
                          {p.name}
                        </span>
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-13">
                    <p className="border-l-2 border-(--accent) pl-4">{p.desc}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
