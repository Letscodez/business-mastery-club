import Link from "next/link";
import AnimatedGradientText from "../ui/animated-gradient-text";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { ArrowRight, ChevronRight } from "lucide-react";
import Grids from "../ui/background-grids";
import { Container } from "../ui/container";

export const Hero = () => {
  const heroTitle = "Inspire Excellence in Business - Learn, Lead, Excel";

  return (
    <Container className="h-screen mb-12 w-full mx-auto max-w-screen-xl px-4 md:px-0">
      <Grids />
      <div className="flex flex-col items-center justify-center py-20 h-full">
        <button className="relative grid rounded-full shadow-inner bg-gradient-to-tr overflow-hidden mt-[70px]">
          <span className="absolute inset-x-0 bottom-0 h-full blur-md bg-gradient-to-tr from-primary/40" />
          <AnimatedGradientText className="bg-neutral-950">
            <span className="inline bg-gradient-to-r from-[#FFAA40] via-[#9C40FF] to-[#FFAA40] bg-clip-text text-transparent">
              Business Mastery Club
            </span>
            <ChevronRight className="ml-2 w-4 h-4" />
          </AnimatedGradientText>
        </button>

        <div className="flex flex-col items-center mt-8 max-w-4xl w-11/12 md:w-full">
          <TextGenerateEffect words={heroTitle} title={true} />
          <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
            Master essential skills in business, fostering leadership,
            innovation, and practical decision-making.
          </p>

          <div className="flex relative items-center justify-center mt-8 md:mt-12 w-full">
            <Link
              href="#"
              className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none"
            >
              <p className="text-foreground sm:block hidden text-sm text-center md:text-base font-medium pl-4 pr-4 lg:marker:pr-0">
                ✨ Join the journey to mastering business today!
              </p>
              <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-white group">
                <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0000_0%,#FF7F00_6.66%,#FFFF00_13.33%,#00FF00_20%,#4B0082_33.33%,#8B00FF_40%,#FF1493_46.66%,#FF6347_53.33%,#FF4500_60%,#FFD700_66.66%,#ADFF2F_73.33%,#00FA9A_80%,#00FFFF_86.66%,#FF69B4_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#333] px-3 text-sm font-medium text-white backdrop-blur-3xl">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 duration-200" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};
