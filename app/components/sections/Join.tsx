import React from "react";
import { Container } from "../ui/container";
import SectionBadge from "../ui/section-badge";
import { Timeline } from "../ui/timeline";
import { reasons } from "@/constants/why_our_club";

const WhyOurClub = () => {
  return (
    <section id="WhyOurClub">
      <div className="flex flex-col items-center justify-center py-12 relative">
        {/* Background Blur Effect */}
        <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>
        <Container>
          <div className="max-w-md mx-auto text-center">
            <SectionBadge title="Why our Club" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Whats so special about our club?
            </h2>
            <p className="text-gray-200 mt-6">
              There are several reasons why our club stand out from the rest of
              the clubs.
            </p>
          </div>
        </Container>
        <Container>
          <Timeline data={reasons} />
        </Container>
      </div>
    </section>
  );
};

export default WhyOurClub;
