/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dlsu-green": "#00763E",
        "up-maroon": "#9C002E",
        "admu-blue": "#230098",
        "material-black": "#1D1D1F",
        "material-white": "#F5F5F7"
      },
    },
  },
  plugins: [],
};
