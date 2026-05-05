import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-r7)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: {
        softDrop: "0 22px 55px rgba(0, 0, 0, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;