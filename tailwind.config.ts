import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },

      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
      },
    },
  },
  screens: {
    "2xl": { max: "1535px" },
    xl: { max: "1279px" },
    lg: { max: "1023px" },
    md: { max: "767px" },
    sm: { max: "639px" },
    xs: { max: "479px" },
  },

  plugins: [],
};
export default config;
