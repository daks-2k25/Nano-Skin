"use client";

import { guiaPratico } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { DrawLine } from "@/components/ui/backdrop";
import { DeviceTrail } from "./DeviceTrail";

export function DeviceCompatibility() {
  const { devices } = guiaPratico;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-azure-900 via-azure-800 to-azure-900 py-32 md:py-40">
      <Container className="relative">
        <DrawLine className="w-full max-w-3xl bg-bone-50/15" />
        <div className="mt-10 flex flex-col gap-6">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-bone-50/65">
              {devices.title}
            </p>
          </Reveal>
          <DeviceTrail items={devices.items} delay={0.1} />
        </div>
      </Container>
    </section>
  );
}
