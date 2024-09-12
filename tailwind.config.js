/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#E58F28",
        secondery: "#373026",
      },
      fontFamily: {
        poppins: ["var(--font-poppins), sans-serif"],
        aoboshiOne: ["var(--font-aoboshi-one), sans-serif"],
        pressStart2: ["var(--font-press-start-2), sans-serif"],
        prostoOne: ["var(--font-prosto-one), sans-serif"],
        wallpoet: ["var(--font-wallpoet), sans-serif"],
      },
    },
  },
  plugins: [],
};
