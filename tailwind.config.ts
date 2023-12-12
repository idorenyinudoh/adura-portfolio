import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>> {
  theme: {
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi', ...defaultTheme.fontFamily.sans],
        'monument-extended': ['Monument Extended', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'adura-purple': '#B0ABCB',
        'adura-black': '#1A1A1A'
      }
    },
  }
}
