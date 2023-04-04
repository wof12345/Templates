/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
      },
      fontFamily: {
        poppins: ["Poppins"],
        script: ["Dancing Script"],
      },
      screens: {
        sm: "640px",
      },
    },
  },
};
