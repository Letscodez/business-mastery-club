import Image from "next/image";

export const reasons = [
  {
    title: "Develop Business Skills",
    content: (
      <div>
        <p className="text-neutral-200 text-md md:text-sm font-normal mb-8">
          Gain practical experience in entrepreneurship, finance, marketing, and
          leadership. Learn how to apply business theories in real-world
          scenarios and develop skills that are highly valued in the business
          world.
        </p>
        <p className="text-neutral-200 text-md md:text-sm font-normal mb-8">
          Whether you&apos;re new to business or looking to advance your
          knowledge, our activities provide hands-on learning experiences.
        </p>
        <Image
          src="/business-skills.png" // Replace with your actual image path
          alt="Business Skills"
          width={500}
          height={300}
          className="w-full rounded-2xl mt-8"
        />
      </div>
    ),
  },
  {
    title: "Networking Opportunities",
    content: (
      <div>
        <p className="text-neutral-200 text-md md:text-sm font-normal mb-8">
          Connect with like-minded individuals, successful entrepreneurs, and
          business professionals. Build your network, exchange ideas, and
          collaborate on projects that can expand your professional
          opportunities.
        </p>
        <p className="text-neutral-200 text-md md:text-sm font-normal mb-8">
          Networking in a supportive environment opens doors to internships,
          mentorships, and future career opportunities.
        </p>
        <Image
          src="/networking.png" // Replace with your actual image path
          alt="Networking Opportunities"
          width={500}
          height={300}
          className="w-full rounded-2xl mt-8"
        />
      </div>
    ),
  },
  {
    title: "Hands-On Business Experience",
    content: (
      <div>
        <p className="text-neutral-200 text-md md:text-sm font-normal mb-8">
          Gain direct experience in organizing events, managing budgets,
          marketing products, and solving real-world business challenges.
          You&apos;ll work on projects that mirror actual business situations.
        </p>
        <p className="text-neutral-200 text-md md:text-sm font-normal mb-8">
          Leave with tangible experience to enhance your resume and stand out in
          the job market.
        </p>
        <Image
          src="/hands-on-experience.png" // Replace with your actual image path
          alt="Hands-On Business Experience"
          width={500}
          height={300}
          className="w-full rounded-2xl mt-8"
        />
      </div>
    ),
  },
  {
    title: "Leadership and Personal Growth",
    content: (
      <div>
        <p className="text-neutral-200 text-md md:text-sm font-normal mb-8">
          Take on leadership roles to develop management and decision-making
          skills. Lead teams, make strategic decisions, and contribute to the
          club&apos;s growth.
        </p>
        <p className="text-neutral-200 text-md md:text-sm font-normal mb-8">
          These experiences will build your confidence and leadership abilities,
          preparing you for success in the business world and beyond.
        </p>
        <Image
          src="/leadership-growth.png" // Replace with your actual image path
          alt="Leadership and Personal Growth"
          width={500}
          height={300}
          className="w-full rounded-2xl mt-8"
        />
      </div>
    ),
  },
];
