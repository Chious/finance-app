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
        "beige-500": "#98908B",
        "geige-100": "#F8F4F0",
        "gray-900": "#201F24",
        "gray-500": "#696868",
        "gray-300": "#B3B3B3",
        "gray-100": "#F2F2F2",
        green: "#277C78",
        yellow: "#F2CDAC",
        cyan: "#82C9D7",
        navy: "626070",
        red: "#C94736",
        "purple-dark": "#826CBD",
        purple: "#AF81BA",
        turquoise: "#597C7C",
        brown: "#93674F",
        magenta: "#934F6F",
        blue: "#3F82B2",
        "navy-gray": "#97A0AC",
        "army-green": "#7F9161",
        gold: "#CAB361",
        orange: "#BE6C49",
        white: "#FFFFFF",
      },

      spacing: {
        "50": "4px",
        "100": "8px",
        "150": "12px",
        "200": "16px",
        "250": "20px",
        "300": "24px",
        "400": "32px",
        "500": "40px",
      },
    },
  },
  plugins: [],
};
export default config;
