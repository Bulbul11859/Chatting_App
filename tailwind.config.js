/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        "regal-blue": "#11175D",
        "primary-color": "#5F35F5",
        "secondary-color": "#EA6C00",
      },
      screens: {
        sm: "375px",
        sml: "415px",
        md: "768px",
        lg: "1024px",
        xl: "1480px",
      },
    },
  },
  plugins: [],
};
