/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: "Cabin, sans-serif",
        body: "Ubuntu, sans-serif",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      colors: {
        secbg: "#D1D7DE",
        text: "#0b1119",
        background: "#e6ecf4",
        primary: "#2f4c6f",
        secondary: "#c2d2e5",
        accent: "#41699b",
        cardbg: "#c8d2db",
        borderbot: "#DDDDDD",
        headerbg: "#64748b",
      },
      screens: {
        xs: "380px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
