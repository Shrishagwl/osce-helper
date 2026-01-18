import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        primary: "#137fec",
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
        "card-light": "#ffffff",
        "card-dark": "#1A2633",
        "text-main-light": "#111418",
        "text-main-dark": "#ffffff",
        "text-sec-light": "#617589",
        "text-sec-dark": "#9ca3af",
        "border-light": "#dbe0e6",
        "border-dark": "#2d3748",
      },
      fontFamily: {
        display: ["Public Sans", "Lexend", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
