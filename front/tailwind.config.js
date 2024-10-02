/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      max_3xl: { max: "1660px" },
      max_2xl: { max: "1552px" },
      max_2big: {max: "1400px"},
      max_big: {max: "1350px"},
      max_xl: { max: "1279px" },
      max_lg: { max: "1023px" },
      max_md: { max: "767px" },
      max_sm: { max: "639px" },
      max_lit: { max: "400px" },
    },
    extend: {
      colors: {
        romance: "#F2F2F2",
        lavender: "#E1E1E1",
        comet: "#5D5A88",
        lightGray: "#D9D9D9",
        mountain: "#959595",
        windows: "#3F7FDF",
        palatinate: "#2F3EDE",
        coral: "#FF4444",
        valentine: "#EB5757",
        shamrock: "#09A552",
        mid: "#586069",
        alabaster: "#F9FAFC",
        greenWhite: "#E9EAED",
        doveGrey: "#6E6E6E",
        tealishGreen: "#20E070",
        paleSky: "#747881",
        greyCloud: "#B4B7BB",
        brightBlue: "#005FFF",
        lightSlate: "#6D778C",
        navy: "#0B1C3F",
        balticSea: "#262626",
        desertStorm: "#F9F8F9",
        antique: "#FFECD4",
        mint: "#E0FEF8"
      },
      boxShadow: {
        simple: "0 0 16px 0 rgba(0, 0, 0, 0.1)",
        adminHeader: "0 4px 10px -3px rgba(39, 41, 48, 0.08)",
        navbar: "0 1px 24px 0 rgba(39, 41, 48, 0.08)",
        specialists: "0 3px 20px 0 rgba(39, 41, 48, 0.1)",
        feedback: "0 10px 26px 0 rgba(0, 0, 0, 0.07)",
        white: "13px 13px 0px 0px  #FFFFFF",
        input: "0 0 16px 0 rgba(47, 62, 222, 0.2)",
        case: "0 9px 18px 0 rgba(0, 0, 0, 0.07)",
        tariff: "0 6px 13px 0 rgba(39, 41, 48, 0.06)",
        chatButton: "0 2px 4px 0 rgba(0, 0, 0, 0.25)",
        scrollButton: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
        adminConstructor: "0 4px 21px 0 rgba(0, 0, 0, 0.06)",
        documentInput: "0 3px 10px 0 rgba(0, 0, 0, 0.14)"
      },
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        'slide-down': 'slide-down 0.5s ease-in-out forwards',
        'slide-up': 'slide-up 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

