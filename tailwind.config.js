/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        Urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        defaultBg: "#F6F6F6",
        themeBlack: "#333",
        sidebarIconColor: "#CFD7ED",
        primaryColor: "#696EFF",
        primaryLight: "#E6E6FF",
        defaultGray: "#5C5C5C",
        primaryGreen: "#469A4C",
        darkBlack: "#1E1E1E",
        secondaryGray: "#BCBCBC",
        overlayBlack: "rgba(9, 9, 9, 0.78)",
      },
      screens: {
        xs: "360px",
        sm: "480px", // Small mobile devices
        md: "576px", // Tablets and small mobile screens
        lg: "768px", // Medium tablets and large phones
        xl: "992px", // Laptops or larger tablets
        "2xl": "1200px", // Standard desktop screens
        "3xl": "1500px", // Larger desktop displays
        "4xl": "1920px", // High-resolution or ultra-wide displays
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
