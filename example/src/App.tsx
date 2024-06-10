import { useState } from 'react'
import styled from 'styled-components'

import {
  KaThemeProvider,
  KaButton,
  KaLabel,
  KaIcon,
  KaText,
  useKaTheme,
} from 'kaia-design-system'

import './App.css'

const StyledContainer = styled.div`
  padding: 20px;
  height: 100%;
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-bottom: 10px;
`

const Home = ({
  theme,
  setTheme,
}: {
  theme: 'light' | 'dark'
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>
}) => {
  const { getTheme } = useKaTheme()

  return (
    <StyledContainer style={{ backgroundColor: getTheme('gray', '10') }}>
      <StyledSection>
        <KaText fontType="EN/title/lg_700">Toggle Theme</KaText>

        <KaButton
          onClick={(): void => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}
        >
          {theme}
        </KaButton>
      </StyledSection>
      <StyledSection>
        <KaText fontType="EN/title/lg_700">Icons</KaText>

        <KaIcon.SearchNormal stroke="blue" />
        <KaIcon.Chevron_bottom stroke="blue" />
      </StyledSection>
      <StyledSection>
        <KaText fontType="EN/title/lg_700">Labels</KaText>

        <KaLabel size="md" color="red" text="text" type="solid" />
        <KaLabel size="md" color="red" text="text" type="pale" />
        <KaLabel size="md" color="red" text="text" type="line" />
        <KaLabel size="md" color="red" text="text" type="paleBorder" />
      </StyledSection>
      <StyledSection>
        <KaText fontType="EN/title/lg_700">Buttons</KaText>

        <KaButton size="sm" onClick={() => alert('?')}>
          Button
        </KaButton>
        <KaButton type="secondary" size="md" onClick={() => alert('?')}>
          Button
        </KaButton>
        <KaButton type="tertiary" size="lg" onClick={() => alert('?')}>
          Button
        </KaButton>
        <KaButton
          disabled
          type="secondary"
          size="xl"
          onClick={() => alert('?')}
        >
          Button
        </KaButton>
        <KaButton type="red" onClick={() => alert('?')}>
          Button
        </KaButton>
        <KaButton type="redLine" onClick={() => alert('?')}>
          Button
        </KaButton>
      </StyledSection>
    </StyledContainer>
  )
}

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <KaThemeProvider theme={theme}>
      <Home theme={theme} setTheme={setTheme} />
    </KaThemeProvider>
  )
}

export default App
