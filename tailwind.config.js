/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserratLight: ["MontserratLight"],
        montserratRegular: ["MontserratRegular"],
      },
      colors: {
        flashYellow: "#FFD700",
        sunshineYellow: "#FFFF00",
        turquoise: "#00CED1",
        red: "#FF0000",
        skyBlue: "#87CEEB",
        limeGreen: "#32CD32",
        hotPink: "#FF69B4",
        greenApple: "#7FFF00",
        pastelBlue: "#B0E0E6",
        mintGreen: "#98FB98",
        peach: "#FFDAB9",
        lavender: "#E6E6FA",
        lightSalmon: "#FFA07A",
        orange: "#FFA500",
        green: "#00FF00",
        blue: "#0000FF",
        indigo: "#4B0082",
        violet: "#800080",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
