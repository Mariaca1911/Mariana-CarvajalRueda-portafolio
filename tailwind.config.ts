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
        // Paleta azul principal
        blue: {
          50:  "#E6F1FB",
          100: "#B5D4F4",
          200: "#85B7EB",
          400: "#378ADD",
          600: "#185FA5",
          800: "#0C447C",
          900: "#042C53",
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        display: ["'Syne'", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-up": "slideUp 0.5s ease forwards",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      fontSize: {
        xs:   ['0.88rem',  { lineHeight: '1.4' }],
      sm:   ['1rem',  { lineHeight: '1.5' }],
      base: ['1.1rem',    { lineHeight: '1.6' }],
      lg:   ['1.25rem',  { lineHeight: '1.6' }],
      xl:   ['1.4rem', { lineHeight: '1.4' }],
      '2xl':['1.7rem',  { lineHeight: '1.3' }],
    },

      
    },
  },
  plugins: [],
};
export default config;
