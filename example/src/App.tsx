import { ReactElement, ReactNode } from 'react'
import './App.css'
import {
  KaThemeProvider,
  KaButton,
  KaLabel,
  KaIcon,
  KaText,
  useKaTheme,
} from 'kaia-design-system'

const Home = () => {
  const { getTheme } = useKaTheme()

  return (
    <div style={{ backgroundColor: getTheme('gray', '10') }}>
      <KaText fontType="EN/title/sm_400">
        The quick brown fox jumps over the
      </KaText>
      <KaIcon.SearchNormal stroke="blue" />
      <div>
        <KaLabel size="md" color="red" text="text" type="solid" />
        <KaLabel size="md" color="red" text="text" type="pale" />
        <KaLabel size="md" color="red" text="text" type="line" />
        <KaLabel size="md" color="red" text="text" type="paleBorder" />
      </div>
      <KaButton onClick={() => alert('Button clicked')}>Button</KaButton>
    </div>
  )
}

const AppProvider = ({ children }: { children: ReactNode }): ReactElement => {
  return <KaThemeProvider theme="light">{children}</KaThemeProvider>
}

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  )
}

export default App
