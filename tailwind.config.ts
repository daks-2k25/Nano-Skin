import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07090d",
          900: "#0b0e14",
          800: "#12161f",
          700: "#1a202c",
          600: "#262d3d",
        },
        bone: {
          50: "#f8f9fb",
          100: "#f0f2f6",
          200: "#e3e7ee",
          300: "#ccd2dd",
        },
        // Azul de marca NanoSkinBio — ancorado em dois pontos reais:
        // 500 = azul de interface do site oficial (rgb(71,126,235));
        // 800 = azul de embalagem/fotografia de produto do Instagram oficial (~rgb(1,55,142)).
        azure: {
          950: "#050f30",
          900: "#0a1f5c",
          800: "#123a82",
          700: "#1a4fa8",
          600: "#2e66c9",
          500: "#477eeb",
          400: "#729bf0",
          300: "#a9c2f7",
          200: "#d7e3fb",
          100: "#eef3fc",
          50: "#f7faff",
        },
        stone: {
          950: "#0a0c11",
          900: "#141821",
          700: "#3c4353",
          500: "#6c7488",
          300: "#a7adbb",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
        mono: ["var(--font-sans)"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        widest2: "0.32em",
      },
      maxWidth: {
        shell: "1440px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "fade-up": "fadeUp 1.1s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
