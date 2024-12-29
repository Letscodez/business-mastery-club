"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import { Container } from "../ui/container";
import SectionBadge from "../ui/section-badge";
import { clubActivities } from "@/constants/activities";

export function ClubActivities() {
  return (
    <section id="activities">
      <div className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-center">
            <SectionBadge title="Club Activities" />
          </div>
        </Container>
        <Container>
          <HeroParallax products={clubActivities} />
        </Container>
      </div>
    </section>
  );
}
