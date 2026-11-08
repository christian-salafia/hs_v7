import Link from "next/link";
import { Command } from "lucide-react";

import { GridVignetteBackground } from "@/components/ui/grid-vignette-background";
import { SubscribeForm } from "./footer-1-utils/subscribe-form";
import { NavLinks, type FooterSection } from "./footer-1-utils/nav-links";
import { CurrentYear } from "./footer-1-utils/current-year";

/*
 * Site footer. Dark (black) surface, so per the brand rule: white text,
 * gold accent, gold CTA. Copy and links are placeholders.
 */

const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Settings", href: "#" },
    ],
  },
];

const smallLink =
  "rounded-sm text-xs text-white/60 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export function SiteFooter() {
  return (
    <footer className="relative isolate w-full overflow-hidden bg-black text-white">
      <GridVignetteBackground
        className="-z-10 text-gold/15"
        size={48}
        y={0}
        horizontalVignetteSize={90}
        verticalVignetteSize={100}
        intensity={60}
      />

      <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:pt-16 md:pb-12">
        <div className="flex flex-col gap-12 xl:flex-row">
          {/* Brand + newsletter column takes 1/3 on xl; the nav links take the remaining 2/3. */}
          <div className="space-y-6 xl:w-1/3 xl:max-w-sm">
            <Link
              href="#"
              className="flex w-fit items-center gap-2 rounded-sm text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <Command className="text-gold" aria-hidden="true" />
              <span className="font-serif text-2xl">Acme Inc.</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              Streamline workflows, ship faster, and stay ahead with AI.
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <p>Subscribe to our newsletter:</p>
              <SubscribeForm />
            </div>
          </div>

          <NavLinks sections={footerSections} />
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-8 md:flex-row md:justify-between">
          <p className="font-mono text-xs text-white/60">
            &copy; <CurrentYear /> Acme Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className={smallLink}>
              Sitemap
            </Link>
            <Link href="#" className={smallLink}>
              Cookie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
