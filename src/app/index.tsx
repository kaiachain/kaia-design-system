import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'

import { darkTheme, lightTheme } from '../styles/theme'
export { lightTheme, darkTheme }

const StyledThemeProvider = styled.div`
  --Radius-half: 0.25rem;
  --Radius-1: 0.5rem;
  --Radius-3: 1.5rem;
  --Radius-4: 2rem;
  --Radius-6: 22.5rem;
  --Sizing-half: 0.25rem;
  --Sizing-1: 0.5rem;
  --Sizing-2: 0.75rem;
  --Sizing-3: 1rem;
  --Sizing-4: 1.25rem;
  --Sizing-5: 1.5rem;
  --Sizing-6: 1.75rem;
  --Sizing-7: 2rem;
  --Sizing-8: 2.5rem;
  --Sizing-9: 3rem;
  --Sizing-10: 3.5rem;
  --Sizing-11: 4rem;
  --Spacing-half: 0.125rem;
  --Spacing-1: 0.25rem;
  --Spacing-2: 0.5rem;
  --Spacing-3: 0.75rem;
  --Spacing-4: 1rem;
  --Spacing-5: 1.25rem;
  --Spacing-6: 1.5rem;
`

export const KaThemeProvider: React.FC<{
  theme: 'light' | 'dark'
  children: React.ReactNode
}> = ({ theme, children }) => {
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme
  return (
    <StyledThemeProvider>
      <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
    </StyledThemeProvider>
  )
}
