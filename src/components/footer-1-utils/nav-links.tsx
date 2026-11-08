import Link from "next/link";

export type FooterSection = {
  title: string;
  links: { label: string; href: string }[];
};

export function NavLinks({ sections }: { sections: FooterSection[] }) {
  return (
    <nav
      aria-label="Footer"
      className="grid flex-1 grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4"
    >
      {sections.map((section) => (
        <div key={section.title}>
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-gold">
            {section.title}
          </h2>
          <ul className="mt-4 space-y-3">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="rounded-sm text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
