import { cn } from "@/lib/utils";
import SectionBadge from "../ui/section-badge";
import { UserIcon } from "lucide-react";
import { Container } from "../ui/container";
import Marquee from "../ui/marquee";
import { clubMembers } from "@/constants/roles"; // Replace with actual list of members and their roles

interface ClubMember {
  name: string;
  role: string;
  body: string;
}

export const Roles = () => {
  const firstRow = clubMembers.slice(0, clubMembers.length / 2);
  const secondRow = clubMembers.slice(clubMembers.length / 2);

  return (
    <section id="roles">
      <section className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-center">
            <SectionBadge title="Our Club Members" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Roles & Responsibilities of Club Members
            </h2>
            <p className="text-gray-200 mt-6">
              Hear from our amazing club members and word of them about their
              roles and responsibilities in the club.
            </p>
          </div>
        </Container>
        <Container>
          <div className="py-10 md:py-20 w-full">
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
              <Marquee pauseOnHover className="[--duration:20s] select-none">
                {firstRow.map((member: ClubMember) => (
                  <figure
                    key={member.name}
                    className={cn(
                      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]",
                    )}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <UserIcon className="w-6 h-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {member.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
                      {member.body}
                    </blockquote>
                  </figure>
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s] select-none"
              >
                {secondRow.map((member: ClubMember) => (
                  <figure
                    key={member.name}
                    className={cn(
                      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]",
                    )}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <UserIcon className="w-6 h-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {member.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
                      {member.body}
                    </blockquote>
                  </figure>
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
            </div>
          </div>
        </Container>
      </section>
    </section>
  );
};
