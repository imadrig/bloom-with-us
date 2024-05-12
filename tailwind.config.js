import tailwindcssAnimate from "tailwindcss-animate";
import tailwindAriaComponents from "tailwindcss-react-aria-components";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssAnimate, tailwindAriaComponents],
};
