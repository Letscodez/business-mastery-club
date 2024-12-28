import { perks } from "@/constants/mission";
import SectionBadge from "../ui/section-badge";
import Image from "next/image";
import { Container } from "../ui/container";

export const Mission = () => {
  return (
    <Container
      id="mission"
      className="flex flex-col items-center justify-center py-12 relative"
    >
      <div className="max-w-md mx-auto text-center">
        <SectionBadge title="Our Mission" />
        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
          Empowering Future Business Leaders
        </h2>
        <p className="text-gray-200 mt-6">
          Our mission is straight forward - We aim to transform students into
          job creators, not just job seekers.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 lg:first:border-none first:border-gray-900">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="flex flex-col items-center md:text-start text-center md:items-start px-4 py-4 md:px-6 lg:px-8 lg:py-6"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={perk.icon}
                  alt={perk.title}
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-xl font-medium mt-4 text-teal-300">
                {perk.title}
              </h3>
              <p className="text-gray-200 mt-2 text-sm">{perk.info}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
