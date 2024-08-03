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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "l5White": "#FEFEFF",
        "l5Pink": "#EB1888",
        "l5PinkLight": "#F0AEC9",
        "l5WhitePink": "#F7D6E4",
        "l5Green": "#267F66",
        "l5Gray": "#404040",
        "l5LightGray": "#8C8C8F",
        "l5GrayWhite": "#D9D9DA",
        "l5Blue": "#23BCCD"
        

      },
    },
  },
  plugins: [],
};
export default config;
