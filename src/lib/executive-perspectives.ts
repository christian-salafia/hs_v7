/*
 * Content for the "Three Lenses" section (src/components/home/executive-lens-matrix.tsx).
 * PLACEHOLDER COPY: shaped to the component's fields; replace with final copy.
 */

export type ExecutiveRole = "CHRO" | "CTO" | "CISO";

export type InterventionStep = {
  label: string;
  body: string;
};

export type ExecutiveLens = {
  role: ExecutiveRole;
  /** Short tag shown under the role in the tab. */
  badge: string;
  title: string;
  coreFear: string;
  traditionalFailure: string;
  solution: string;
  keyQuestions: string[];
  interventionPath: InterventionStep[];
};

export const EXECUTIVE_LENSES: Record<ExecutiveRole, ExecutiveLens> = {
  CHRO: {
    role: "CHRO",
    badge: "People",
    title: "Adoption is a trust problem before it is a skills problem.",
    coreFear:
      "That the workforce hears “AI” as “replacement” and quietly disengages.",
    traditionalFailure:
      "Training is scheduled after the tools ship, so anxiety sets the narrative before anyone has learned anything.",
    solution:
      "We map where people feel exposed, design the change story with them, and build capability in the teams that will carry it.",
    keyQuestions: [
      "Where is resistance coming from, and is it rational?",
      "Which roles change first, and how do we say so honestly?",
      "How do we measure confidence, not just completion?",
    ],
    interventionPath: [
      { label: "Listen", body: "Surface the real concerns across roles and levels." },
      { label: "Frame", body: "Co-write the change story with the people it affects." },
      { label: "Equip", body: "Build skills inside the teams, on their own work." },
      { label: "Sustain", body: "Track confidence and adjust before it stalls." },
    ],
  },
  CTO: {
    role: "CTO",
    badge: "Platform",
    title: "Licences are not usage, and usage is not value.",
    coreFear:
      "That the platform investment sits idle while shadow tools fill the gap.",
    traditionalFailure:
      "Rollouts are measured by seats provisioned, so low real usage stays invisible until renewal.",
    solution:
      "We tie the platform to specific workflows, prove value in a few teams first, and scale what demonstrably works.",
    keyQuestions: [
      "Which workflows should the platform serve first?",
      "How do we see real usage, not just log-ins?",
      "What does a credible return look like in 90 days?",
    ],
    interventionPath: [
      { label: "Listen", body: "Find the workflows where friction is highest." },
      { label: "Frame", body: "Agree what success means before anything ships." },
      { label: "Equip", body: "Pilot with real teams on real work." },
      { label: "Sustain", body: "Scale the patterns that earn their keep." },
    ],
  },
  CISO: {
    role: "CISO",
    badge: "Risk",
    title: "Blocking everything just moves the risk somewhere you can’t see.",
    coreFear:
      "That sensitive data leaks through tools nobody approved or understands.",
    traditionalFailure:
      "Policy arrives as a wall of restrictions, so people route around it with personal accounts.",
    solution:
      "We design guardrails people can actually follow, so safe use is also the easiest use.",
    keyQuestions: [
      "Where is data going today, approved or not?",
      "Which guardrails will people actually follow?",
      "How do we keep policy current as the tools change?",
    ],
    interventionPath: [
      { label: "Listen", body: "Understand how people are already using AI." },
      { label: "Frame", body: "Set clear, usable rules for data and tools." },
      { label: "Equip", body: "Make the safe path the convenient one." },
      { label: "Sustain", body: "Review policy as usage and tools evolve." },
    ],
  },
};
