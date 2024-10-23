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
        "primary-black": "#080808",
        "primary-green": "#006039",
      },
      fontFamily: {
        quick: ["Quicksand", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        bangers: ["Bangers", "system-ui"],
        cookie: ["Cookie", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
