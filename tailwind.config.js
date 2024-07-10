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
        "custom-gray": "#DEDFE2",
      },
      boxShadow: {
        "custom-bottom": "0px 0px 12px rgba(16, 38, 73, 0.06)",
        custom: "0px 0px 8px 0px rgba(0, 0, 0, 0.078)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)",
        "custom-gradient1": "linear-gradient(135deg, #79F1A4 0%, #0E5CAD 100%)",
        "custom-gradient2":
          "linear-gradient(135.73deg, #FF9865 0%, #EF3031 110.55%)",
      },
    },
  },
};
