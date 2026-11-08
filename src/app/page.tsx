import { Hero } from "@/components/home/hero";
import { ExecutiveLensMatrix } from "@/components/home/executive-lens-matrix";
import { LiteracyBand } from "@/components/home/literacy-band";
import { CoreFramework } from "@/components/home/core-framework";

export default function Home() {
  return (
    <main>
      <Hero />
      <ExecutiveLensMatrix />
      <LiteracyBand />
      <CoreFramework />
    </main>
  );
}
