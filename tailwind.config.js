/** @type {import('tailwindcss').Config} */

import { nextui } from '@nextui-org/react';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      "button": "#0E185F"
    },
    extend: {
      buttonShadow: {
        "sm": "0 15px 30px rgba(255, 255, 255, 0.5)"
    }
    },
  },darkMode: "class",
  plugins: [nextui()],
}

