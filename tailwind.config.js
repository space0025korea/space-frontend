/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: { pretendard: ["pretendard"], baijamjuree: ["baijamjuree"] },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
