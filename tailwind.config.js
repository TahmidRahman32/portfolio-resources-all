/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   plugins: [],
   theme: {
      extend: {
         colors: {
            yellow: "#FECC02",
            black: "#131313",
            gray: "#D2B48C",
         },
         fontFamily: {
            bebas: ["Lato", "sans - serif"],
            montserrat: ["Montserrat", "sans-serif"],
         },
      },
   },
   plugins: [],
};
