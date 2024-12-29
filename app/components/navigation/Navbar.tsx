import Link from "next/link";
import Image from "next/image";
import { nav_links } from "@/constants/navlinks";

export const Navbar = () => {
  return (
    <header className="fixed top-10 left-0 animate-fade-in-down [--animation-delay:600ms] right-0 px-4 py-2 bg-background/40 backdrop-blur-lg border border-white rounded-2xl shadow-xl z-50 max-w-6xl mx-auto w-11/12">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-start">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={40} height={40} priority />
          </Link>
        </div>

        {/* Nav for larger screens */}
        <nav className="hidden md:flex">
          <ul className="flex items-center justify-center gap-8">
            {nav_links.map((link, index) => (
              <li key={index} className="relative group">
                <Link href={link.href} className="text-sm">
                  {link.label}
                </Link>
                <div className="absolute left-0 bottom-0 w-0 h-[3px] rounded-full transition-all duration-200 group-hover:w-full bg-gradient-to-r from-[#1e3a8a] to-[#7f5fc6]" />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="relative hover:scale-105 duration-200 inline-flex h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0000_0%,#FF7F00_6.66%,#FFFF00_13.33%,#00FF00_20%,#4B0082_33.33%,#8B00FF_40%,#FF1493_46.66%,#FF6347_53.33%,#FF4500_60%,#FFD700_66.66%,#ADFF2F_73.33%,#00FA9A_80%,#00FFFF_86.66%,#FF69B4_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Contact Us
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};
