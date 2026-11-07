// Design-token reference page (/styleguide).

const primary = [
  ["maroon", "#8c1d40", "bg-maroon"],
  ["gold", "#ffc627", "bg-gold"],
  ["black", "#191919", "bg-black"],
  ["white", "#fafafa", "bg-white"],
  ["maroon-deep", "#5e1230", "bg-maroon-deep"],
  ["maroon-tint", "#f7eef1", "bg-maroon-tint"],
  ["card", "#ffffff", "bg-card"],
  ["line", "#e6e1e3", "bg-line"],
] as const;

const secondary = [
  ["green", "#78be20", "bg-green"],
  ["blue", "#00a3e0", "bg-blue"],
  ["orange", "#ff7f32", "bg-orange"],
  ["turquoise", "#4ab7c4", "bg-turquoise"],
  ["pink", "#e74973", "bg-pink"],
  ["gray", "#747474", "bg-gray"],
] as const;

const grayscale = [
  ["neutral-900", "#191919", "bg-neutral-900"],
  ["neutral-800", "#3d3d3d", "bg-neutral-800"],
  ["neutral-700", "#616161", "bg-neutral-700"],
  ["neutral-600", "#858585", "bg-neutral-600"],
  ["neutral-500", "#a8a8a8", "bg-neutral-500"],
  ["neutral-300", "#d4d4d4", "bg-neutral-300"],
  ["neutral-50", "#fafafa", "bg-neutral-50"],
] as const;

function Swatches({
  title,
  items,
}: {
  title: string;
  items: readonly (readonly [string, string, string])[];
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {items.map(([name, hex, bg]) => (
          <div
            key={name}
            className="overflow-hidden rounded-lg border border-line bg-card"
          >
            <div className={`h-16 ${bg}`} />
            <div className="p-3">
              <p className="text-sm font-medium text-ink">{name}</p>
              <p className="font-mono text-xs text-muted">{hex}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl space-y-16 px-6 py-20">
      <header className="space-y-4">
        <p className="font-mono text-xs uppercase tracking-widest text-maroon">
          Design tokens
        </p>
        <h1 className="font-serif text-5xl text-maroon">
          Human Signal, <em>set in Newsreader</em>
        </h1>
        <p className="max-w-2xl text-lg text-body">
          Body copy in Geist on the white page. Muted labels use{" "}
          <span className="text-muted">#616161</span>; code uses{" "}
          <code className="font-mono">Geist Mono</code>.
        </p>
      </header>

      <Swatches title="Primary" items={primary} />
      <Swatches title="Secondary — meaning only" items={secondary} />
      <Swatches title="Grayscale" items={grayscale} />

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-4 rounded-lg border border-line bg-maroon-tint p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-maroon">
            Light surface
          </p>
          <p className="font-serif text-2xl text-ink">Maroon on light.</p>
          <button className="rounded-md bg-maroon px-5 py-2.5 text-sm font-medium text-white hover:bg-maroon-deep">
            Primary CTA
          </button>
        </div>
        <div className="space-y-4 rounded-lg bg-black p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-gold">
            Dark surface
          </p>
          <p className="font-serif text-2xl text-white">Gold on dark.</p>
          <button className="rounded-md bg-gold px-5 py-2.5 text-sm font-medium text-black">
            Primary CTA
          </button>
        </div>
      </section>
    </main>
  );
}
