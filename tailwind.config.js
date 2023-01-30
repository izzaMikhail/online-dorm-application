/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sidebar: "url('/malaki.jpg')",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      // ...
      borderColor: ["focus-visible", "first"],
      // ...
      textColor: ["visited"],
    },
  },
  plugins: [],
};
