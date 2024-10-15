import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "8rem",
        xl: "10rem",
        "2xl": "15rem",
      },
    },
    extend: {
      colors: {
        background: {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3d3d3d",
          "950": "#2b2b2b",
          DEFAULT: "#2b2b2b",
        },

        accent: {
          "50": "#effafc",
          "100": "#d7f1f6",
          "200": "#99d8e8",
          "300": "#7fcce1",
          "400": "#43adcd",
          "500": "#2790b3",
          "600": "#247596",
          "700": "#235f7b",
          "800": "#255065",
          "900": "#224357",
          "950": "#122b3a",
          DEFAULT: "#99d8e8",
        },
      },
    },
  },
  plugins: [],
};
export default config;
