import Link from "next/link";
import Image from "next/image";
import { nav_links } from "@/constants/navlinks";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 relative">
      <div className="absolute -top-1/4 -right-1/4 bg-[#004be0] w-72 h-52 rounded-full -z-10 blur-[14rem]" />
      <div className="absolute bottom-0 -left-1/4 bg-[#004be0] w-72 h-52 rounded-full -z-10 blur-[14rem]" />
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-8 w-full">
        {/* Logo & Info */}
        <div className="flex flex-col items-start justify-start md:max-w-[200px]">
          <Image src="/logo.png" alt="Logo" width={50} height={50} priority />
          <p className="text-muted-foreground mt-4 text-sm">
            Inspire Excellence in Business - Learn, Lead, Excel
          </p>
          <span className="mt-4 text-neutral-200 text-sm">
            Crafted with 💝 by Business Mastery Club
          </span>
        </div>

        {/* Club Links */}
        <div>
          <h3 className="text-base font-medium text-white">Club</h3>
          <ul className="mt-4 text-sm text-muted-foreground grid grid-cols-2 sm:grid-cols-1">
            {nav_links.map((link) => (
              <li key={link.href} className="mt-2">
                <Link
                  href={link.href}
                  className="hover:text-foreground transition-all duration-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Integrations Links */}
        <div className="mt-10 md:mt-0">
          <h3 className="text-base font-medium text-white">Integrations</h3>
          <ul className="mt-4 text-sm text-muted-foreground">
            {["Facebook", "Instagram", "Twitter", "LinkedIn"].map(
              (platform) => (
                <li key={platform} className="mt-2">
                  <Link
                    href=""
                    className="hover:text-foreground transition-all duration-300"
                  >
                    {platform}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 w-full flex flex-col md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground mt-8 md:mt-0">
          &copy; {new Date().getFullYear()} Business Mastery Club INC. All
          rights reserved.
        </p>
        <Link
          href="https://github.com/LetsCodez"
          target="_blank"
          className="text-sm text-white mt-8 md:mt-0 hover:text-white/80 transition outline-none"
        >
          LetsCodez | GitHub
        </Link>
      </div>
    </footer>
  );
}
