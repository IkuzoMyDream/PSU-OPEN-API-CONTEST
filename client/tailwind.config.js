const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        "green-1": "#63C19A",
        "green-2": "#3EA37E",
        "red-1": "#DE7A6C",
        "red-2": "#E06146",
        "pale-blue-gray": "#E8F8F8",
        "dark-blue-gray":"#223C44",
      },
    },
  },
  plugins: [require("flowbite/plugin"), flowbite.plugin()],
};
