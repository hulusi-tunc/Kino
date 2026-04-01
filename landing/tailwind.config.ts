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
        cream: "#FAF9F7",
        surface: "#F5F4F0",
        coral: "#E85D3A",
        "coral-hover": "#D04A2C",
        "text-primary": "#1C1B18",
        "text-secondary": "#686763",
        "text-tertiary": "#A8A7A3",
        border: "#E5E4E0",
        "dark-bg": "#0C0E12",
        "dark-surface": "#1A1E25",
        "dark-border": "#22262F",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        "inter-tight": ["var(--font-inter-tight)", "system-ui", "sans-serif"],
        instrument: ["var(--font-instrument)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
