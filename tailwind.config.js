/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-grey": "#4A4A4A",
        "bg-grey": "#EFEFEF",
        "input-grey": "#CACACA",
        "error-color": "#D32F2F",
        "text-grey": "#D9D9D9",
        "icon-text-bg" : "#888",
        "bg-blue" : "#87CEFA",
        "text-blue" : "#6495ED",
        "input-blue" : "#F0F8FF",
        "mui-blue" : "#006BD6",
        "egjs-yello" : "#F5C720",
        "status-green" : "#0B6623",
      },
      fontFamily: {
        nanumGothic: ["NanumGothic-Regular"],
        Roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};