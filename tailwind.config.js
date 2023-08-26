/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#0060FF",

          secondary: "#000000",

          accent: "#F0F8FF",

          neutral: "#D5E6FB",

          base: "#F0F8FF",

          info: "#3abff8",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ],
  },
  // darkMode: "data-theme",
  darkMode: ["class", '[data-mode="dark"]'],
};
