import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate"; // Correct import syntax

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#000000", // Your background color
        foreground: "#ffffff", // Your foreground color
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // Add more colors here
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        // Add more keyframes as needed
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        marquee: "marquee var(--duration) linear infinite",
        // Add more animations here
      },
    },
  },
  plugins: [tailwindcssAnimate], // Use ES module import for the plugin
} satisfies Config;
