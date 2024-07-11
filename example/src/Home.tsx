import styled from 'styled-components'

import {
  KaButton,
  KaLabel,
  KaIcon,
  KaText,
  useKaTheme,
  KaRadio,
  KaCheckBox,
} from '@kaiachain/kaia-design-system'

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

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`

const StyledCustom = styled.div`
  background-color: ${({ theme }) => theme.customColor.text};
  color: ${({ theme }) => theme.customColor.bg};
  border: 3px solid;
  border-color: ${({ theme }) => theme.brand[6]};
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
        <KaText fontType="title/lg_700">Toggle Theme</KaText>
        <label>
          <KaRadio selected={theme} value="light" onClick={setTheme} />
          <KaText fontType="body/md_600">Light</KaText>
        </label>
        <label>
          <KaRadio size="md" selected={theme} value="dark" onClick={setTheme} />
          <KaText fontType="body/md_600">Dark</KaText>
        </label>
      </StyledSection>

      <StyledSection>
        <KaText fontType="title/lg_700">CheckBox</KaText>

        <StyledRow>
          <KaCheckBox size="sm" value="1" onClick={() => {}} />
          <KaCheckBox checked size="sm" value="1" onClick={() => {}} />
          <KaCheckBox size="md" value="1" onClick={() => {}} />
          <KaCheckBox checked size="md" value="1" onClick={() => {}} />
          <KaCheckBox size="lg" value="1" onClick={() => {}} />
          <KaCheckBox checked size="lg" value="1" onClick={() => {}} />
          <KaCheckBox disabled size="lg" value="1" onClick={() => {}} />
          <KaCheckBox disabled checked size="lg" value="1" onClick={() => {}} />
        </StyledRow>
      </StyledSection>
      <StyledSection>
        <KaText fontType="title/lg_700">Icons</KaText>

        <KaIcon.SearchNormal style={{ width: 20, height: 30 }} stroke="blue" />
        <KaIcon.Chevron_bottom
          style={{ width: 30, height: 20 }}
          stroke="blue"
        />
      </StyledSection>
      <StyledSection>
        <KaText fontType="title/lg_700">Labels</KaText>

        <KaLabel size="md" color="red" text="text" type="solid" />
        <KaLabel size="md" color="red" text="text" type="pale" />
        <KaLabel size="md" color="red" text="text" type="line" />
        <KaLabel size="md" color="red" text="text" type="paleBorder" />
      </StyledSection>
      <StyledSection>
        <KaText fontType="title/lg_700">Buttons</KaText>

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
      <StyledSection>
        <KaText fontType="title/lg_700">Custom </KaText>
        <StyledCustom>CustomCustomCustom</StyledCustom>
      </StyledSection>
    </StyledContainer>
  )
}

export default Home
