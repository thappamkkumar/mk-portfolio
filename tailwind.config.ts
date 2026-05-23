import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
      },

      backdropBlur: {
        xs: "2px",
      },

      boxShadow: {
        glow: "0 0 40px rgba(163,230,53,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
