import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        brand: "#091DF6FB",
        secondary: "#BFCCDC",
        "search-bar": "#F3FBFF",
        D: "#0F0726",
        E: "#575268",
        border: "#575268",
        white: "#FFFFFF",
        bg: "#f2f2f3",
        "secondary-text": "#828282",
        "ternary-text": "#CFCFCF",
        error: "#ef4444",
      },
      borderRadius: {
        "2.5xl": "20px",
        "4.5xl": "30px",
        "9xl": "30px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config