import { darkTheme, lightTheme } from '@kaiachain/kaia-design-system'

export const customDarkTheme = {
  customColor: {
    bg: 'red',
    text: 'blue',
  },
  ...darkTheme,
}

export type ExThemeType = typeof customDarkTheme

export const customLightTheme: ExThemeType = {
  customColor: {
    bg: 'yellow',
    text: 'green',
  },
  ...lightTheme,
}

declare module 'styled-components' {
  export interface DefaultTheme extends ExThemeType {}
}
