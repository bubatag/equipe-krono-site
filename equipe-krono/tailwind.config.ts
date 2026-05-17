import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E0830F",
        secondary: "#AAAAAA",
        system: "#F4F4F4", 
      },
      fontFamily: {
        title: ["var(--font-audiowide)", "sans-serif"],
        sans: ["var(--font-open-sans)", "sans-serif"], 
      },
    },
  },
  plugins: [],
};
export default config;