import styled from 'styled-components'
import {
  KaLabel,
  KaText,
  useKaTheme,
  KaRadio,
} from '@kaiachain/kaia-design-system'

import { Row } from './components/Row'
import Buttons from './Buttons'
import CheckBoxes from './CheckBoxes'
import Texts from './Texts'
import Icons from './Icons'
import Logos from './Logos'
import Inputs from './Inputs'
import SelectBoxes from './SelectBoxes'

const StyledContainer = styled(Row)`
  padding: 140px 20px;
  height: 100%;
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-bottom: 20px;
`

const StyledFixed = styled(StyledSection)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.gray[8]};
  z-index: 1;
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
      <StyledFixed>
        <KaText fontType="title/sm_700">Toggle Theme</KaText>
        <Row>
          <label>
            <KaRadio selected={theme} value="light" onClick={setTheme} />
            <KaText fontType="body/md_600">Light</KaText>
          </label>
          <label>
            <KaRadio
              size="md"
              selected={theme}
              value="dark"
              onClick={setTheme}
            />
            <KaText fontType="body/md_600">Dark</KaText>
          </label>
        </Row>
      </StyledFixed>
      <div>
        <StyledSection>
          <KaText fontType="title/lg_700">Texts</KaText>
          <Texts />
        </StyledSection>

        <StyledSection>
          <KaText fontType="title/lg_700">Buttons</KaText>
          <Buttons />
        </StyledSection>

        <StyledSection>
          <KaText fontType="title/lg_700">CheckBox</KaText>
          <CheckBoxes />
        </StyledSection>
        <StyledSection>
          <KaText fontType="title/lg_700">Icons</KaText>
          <Icons />
        </StyledSection>
        <StyledSection>
          <KaText fontType="title/lg_700">Logos</KaText>
          <Logos />
        </StyledSection>
        <StyledSection>
          <KaText fontType="title/lg_700">Labels</KaText>
          <KaLabel size="xs" color="red" text="text" type="solid" />
          <KaLabel size="sm" color="red" text="text" type="pale" />
          <KaLabel size="md" color="red" text="text" type="line" />
          <KaLabel size="lg" color="red" text="text" type="paleBorder" />
          <KaLabel
            color="blue"
            text="text"
            type="solid"
            containerStyle={{ width: 200 }}
          />
          <KaLabel
            color="green"
            text="text"
            type="solid"
            fontStyle={{ backgroundColor: 'red' }}
            onClick={() => window.alert('clicked')}
          />
        </StyledSection>
        <StyledSection>
          <KaText fontType="title/lg_700">SelectBox </KaText>
          <SelectBoxes />
        </StyledSection>
        <StyledSection>
          <KaText fontType="title/lg_700">TextInput</KaText>
          <Inputs />
        </StyledSection>

        <StyledSection>
          <KaText fontType="title/lg_700">Custom </KaText>
          <StyledCustom>CustomCustomCustom</StyledCustom>
        </StyledSection>
      </div>
    </StyledContainer>
  )
}

export default Home
