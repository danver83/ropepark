import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        paralax1: "url('/images/about.webp')",
        video: "url('/images/starship/1.webp')",
        video2: "url('/images/starship/33.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
