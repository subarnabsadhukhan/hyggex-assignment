/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f9f9f9",
        darkslateblue: {
          50: "#4a85ff",
          100: "#164EC0",
          200: "#06286e",
        },
        dimgray: "#696671",
        white: "#fff",
        darkslategray: {
          100: "#3a3740",
          200: "#202b37",
        },
        gray: "#28262c",
        silver: "#c4c4c4",
      },
      fontFamily: {
        inter: "Inter",
        lato: "Lato",
        montserrat: "Montserrat",
      },
      borderRadius: {
        "23xl-5": "42.5px",
      },
    },
  },
  plugins: [],
};
