/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss"

export default {
  content: [
    `./blocks/**/*.{vue,js,ts}`,
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`
  ],
  theme: {
    extend: {
      colors: {
        moo: {
          bkg: "#F7F7F7",
          black: {
            jam: "#06091C",
          },
          dark: {
            jam: "#0D0F24"
          },
          blue: {
            medium: "#052FDB",
            low: "#1F45E4",
            "200": "#BFDBFE"
          },
        }
      },
    },
  },
  plugins: [],
} as Config;

