import { useTheme } from '@emotion/react'
import { KaTheme } from '../styles'
import { hexToRGBA } from '../utils'

export type UseKaThemeReturn = {
  getTheme: <T1 extends keyof KaTheme, T2 extends keyof KaTheme[T1]>(
    val1: T1,
    val2: T2,
    opacity?: number,
  ) => string
}

export const useKaTheme = (): UseKaThemeReturn => {
  const theme = useTheme()

  const getTheme = <T1 extends keyof KaTheme, T2 extends keyof KaTheme[T1]>(
    val1: T1,
    val2: T2,
    opacity?: number,
  ) => hexToRGBA(theme[val1][val2] as string, opacity || 1)

  return { getTheme }
}
