import tailwindcssAnimate from "tailwindcss-animate";
import tailwindAriaComponents from "tailwindcss-react-aria-components";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      bgpurple: "#BE95C4",
    },
    extend: {},
  },
  plugins: [tailwindcssAnimate, tailwindAriaComponents],
};
