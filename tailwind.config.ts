import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#1e1e20",
          "bg-sub": "#141414",
          divider: "rgba(82, 82, 89, .32)",
          shadow: "0 12px 32px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08)",
          link: "rgba(255,255,245,.86)",
          "dark-bg": "#0908087a",
        },
        primary: {
          500: "#3dff3c"
        }
      },
      width: {
        "11/13": "94.5%"
      },
      fontSize: {
        md: ".93rem"
      },
      gridTemplateColumns: {
        cart: "50% max-content 1fr"
      }
    },
  },
  plugins: [],
}
export default config
