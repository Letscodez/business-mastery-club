import { cn } from "@/lib/utils";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Navbar } from "./components/navigation/Navbar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Business Mastery Club",
  description:
    "Business Mastery Club is a community of entrepreneurs who are dedicated to mastering their craft.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden",
          poppins.className,
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
