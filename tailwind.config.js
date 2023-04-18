/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6379F4",
        dark: "#3A3D42",
        error: "#FF5B37",
        secondary: "rgba(99, 121, 244, 0.2)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        vektor: "url('/images/phones3.png')",
      },
    },
    fontFamily: {
      nunito: ['"Nunito Sans"'],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
