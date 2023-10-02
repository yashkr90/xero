/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgwhite: "#fcfcff",
        black: "#000",
        white: "#fff",
        royalblue: "#0c5bc6",
        gainsboro: "#e7e7e9",
        gray: {
          100: "#818181",
          200: "#797979",
          300: "#242331",
          400: "#231f20",
          500: "rgba(0, 0, 0, 0.1)",
          600: "rgba(36, 35, 49, 0.23)",
          700: "rgba(121, 121, 121, 0.5)",
        },
        mediumseagreen: "#34a853",
        coral: "rgba(247, 117, 86, 0.53)",
        mintcream: "#edf5ed",
        whitesmoke: {
          100: "#f9f9f9",
          200: "#f3f3f4",
          300: "#e9e9e9",
        },
        lavenderblush: {
          100: "#fcecea",
          200: "#fbeae9",
        },

        navajowhite: "#ffdfa2",
        oldlace: "#fff5e5",
        lightsteelblue: {
          100: "#c2dafb",
          200: "#c7ceff",
        },
        goldenrod: "#ffc656",
        orange: "rgba(255, 153, 0, 0.1)",
        firebrick: "#d12223",
        aliceblue: {
          100: "#ecf3fe",
          200: "#ebf0f4",
        },
        deepskyblue: "#64baff",
        lavender: "#e0ecff",
        dodgerblue: "rgba(65, 146, 255, 0.4)",
        silver: "#c0c0c0",
        ghostwhite: "#f6faff",
      },
      spacing: {},
      fontFamily: {
        nunito: "Nunito",
      },
      borderRadius: {
        "11xl": "30px",
        "3xs": "10px",
        xl: "20px",
        mini: "15px",
        "6xl": "25px",
      },
    },
    // fontSize: {
    //   base: "16px",
    //   lg: "18px",
    //   sm: "14px",
    //   "3xl": "22px",
    //   xs: "12px",
    //   "56xl": "75px",
    //   inherit: "inherit",
    // },
  },
  corePlugins: {
    preflight: false,
  },
};
