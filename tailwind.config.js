/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      textColor:{
        skin:{
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          delSel: "var(--color-text-delSel)",
          odd:"var(--color-text-odd)",
          equal:"var(--color-text-equal)",
        }
      },
      backgroundColor:{
        skin:{
          fill: "var(--color-main-background)",
          toggleBg: "var(--toggle-background)",
          keypadBg: "var(--keypad-background)",
          screenBg: "var(--screen-background)",
          base: "var(--color-text-base)",
          delSel: "var(--key-del-select)", 
          equalToggle: "var(--key-equal-toggle)",
          key: "var(--key-bg)",     
        }
      },
      boxShadowColor:{
        skin:{
          delSelShd: "var(--key-del-select-shadow)",
          toggleShd: "var(--key-equal-toggle-shadow)",
          keyShd: "var(--key-shadow)",
        }
      }
    },
  },
  plugins: [],
}

