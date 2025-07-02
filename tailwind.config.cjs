// eslint-disable-next-line no-undef
/** @type {import('tailwindcss').Config} */

const colors = {
  darkGreen: "#202E13",
  darkGreenOpacity: "#202E13E6",
  lightGreen: "#E8E7D2",
  white: "#FFFFFF",
  grey: "#9C9898",
  lightBlue: "#E1EDEE",
};
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Couleurs principales
        primary: colors.darkGreen,
        secondary: colors.white,

        // Surfaces (arrière-plans)
        "surface-primary": colors.lightGreen, // Vert très clair
        "surface-secondary": colors.darkGreenOpacity, // Vert foncé
        "surface-tertiary": colors.lightBlue, // bleu clair

        // Textes
        "text-primary": colors.darkGreen, // Noir naturel
        "text-secondary": colors.white, // Gris foncé
        "text-tertiary": colors.grey, // Gris moyen
      },
    },
  },
  plugins: [],
};
