import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3D9991",
        dark: "#1F1F1F",
        "gray-footer": "#333333",
        "gray-prefooter": "#4A4A4A",
      },
      fontFamily: {
        sans: ["proxima-nova", "system-ui", "sans-serif"],
        serif: ["adobe-garamond-pro", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;