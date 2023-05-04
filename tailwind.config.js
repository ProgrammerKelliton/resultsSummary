/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        small: ["30px"],
        medium: ["40px"],
      },
    },
  },
  plugins: [],
};
