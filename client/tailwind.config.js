const { Opacity } = require("@mui/icons-material");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: ["13px", "18px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["19px", "28px"],
      xl: ["22px", "32px"],
      xll: ["24px", "32px"],
    },
    extend: {
      colors: {
        primary: "#ff7f00",
        hemen: "#ffc200",
      },
      variants: {
        extend: {
          border: ["focus"],
          ring: ["focus"],
        },
      },
      tooltipArrows: (theme) => ({
        "danger-arrow": {
          borderColor: theme("colors.primary"),
          borderWidth: 1,
          backgroundColor: theme("colors.primary"),
          size: 20,
        },
      }),
    },
  },

  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-tooltip-arrow-after")(),
  ],
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
};
