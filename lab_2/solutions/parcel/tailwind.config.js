const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        blaka: ["Blaka", ...defaultTheme.fontFamily.sans],
        macondo: ["Macondo", ...defaultTheme.fontFamily.sans],
        handlee: ["Handlee", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
