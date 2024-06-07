import './App.css'
import { KaThemeProvider, KaButton, KaLabel, KaIcon } from 'kaia-design-system'

function App() {
  return (
    <KaThemeProvider theme="dark">
      <KaIcon.SearchNormal stroke="blue" />
      <KaLabel color="red" type="solid" text="Label Text" />
      <KaButton onClick={() => alert('Button clicked')}>Button</KaButton>
    </KaThemeProvider>
  )
}

export default App
