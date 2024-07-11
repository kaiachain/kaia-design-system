import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { KaThemeProvider } from '@kaiachain/kaia-design-system'

import './App.css'
import Home from './Home'
import { customDarkTheme, customLightTheme } from './theme'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <ThemeProvider
      theme={theme === 'dark' ? customDarkTheme : customLightTheme}
    >
      <KaThemeProvider theme={theme}>
        <Home theme={theme} setTheme={setTheme} />
      </KaThemeProvider>
    </ThemeProvider>
  )
}

export default App
