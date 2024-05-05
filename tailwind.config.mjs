// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        interLight: ["InterLight", "sans-serif"],
        interRegular: ["InterRegular", "sans-serif"],
        interMedium: ["InterMedium", "sans-serif"],
        interBold: ["InterBold", "sans-serif"],
      },
      colors: {
        gpgreen: "#4A7B39",
        graphicgreen: "#007e0d",
        reversegreen: "#3c9832",
        muggreen: "#4CAF50",
        terracota: "#E2725B",
        matteblack: "#1a1a1a",
        white: "#ffffff",
        darkgray: "#4c4d4e",
        mediumgray: "#a9a8a9",
        lightgray: "#eeeeee",
        backgroundblack: "#000000",
        coolgray: "#252525",
        coolgray2: "#8a8a8d",
        darkgray2: "#4d4d4f",
        coolgray6: "#a9a8a9",
        graycartopacity: "rgba(255, 255, 255, 0.2)",
        blackcartopacity: "rgba(0, 0, 0, 0.25)",
        transparent: "rgba(255, 255, 255, 0)",
        gpgreenblur: "rgba(74, 123, 57, 0.6)",
        navbarhover: "rgba(255, 218, 218, 1)",
      },
    },
  },
  plugins: [],
};
