/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cyber-yellow": "#FCEE0A",
        "cyber-red": "#FD0130",
        "cyber-blue": "#00F0FF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        blender_pro_bold: ["BlenderProBold"],
        blender_pro_book: ["BlenderProBook"],
        refinery_25: ["Refinery25"],
      },
    },
  },
  plugins: [],
};
