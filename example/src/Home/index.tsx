import styled from 'styled-components'

import {
  KaLabel,
  KaIcon,
  KaText,
  useKaTheme,
  KaRadio,
  KaTextInput,
} from '@kaiachain/kaia-design-system'

import { Row } from './components/Row'
import Buttons from './Buttons'
import CheckBoxes from './CheckBoxes'
import Texts from './Texts'

const StyledContainer = styled(Row)`
  padding: 20px;
  height: 100%;
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-bottom: 20px;
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
      <div
        style={{
          width: 300,
        }}
      >
        <StyledSection
          style={{
            position: 'fixed',
            padding: 20,
            margin: '-20px 0 0 -20px',
            backgroundColor: getTheme('gray', '8'),
          }}
        >
          <KaText fontType="title/lg_700">Toggle Theme</KaText>
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
        </StyledSection>
      </div>
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

          <KaIcon.SearchNormal
            style={{ width: 20, height: 30 }}
            stroke="blue"
          />
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
          <KaText fontType="title/lg_700">TextInput</KaText>
          <KaTextInput
            title="Title"
            inputProps={{
              placeholder: 'placeholder',
            }}
            leftIcon="search"
            message="message"
            leftUnit="$"
            rightUnit="SGD"
          />
          <KaTextInput
            title="With button"
            inputProps={{
              placeholder: 'placeholder',
            }}
            leftIcon="search"
            message="message"
            showButton={true}
            onClickButton={() => alert('?')}
          />
          <KaTextInput
            title="With button and plusminus"
            inputProps={{
              placeholder: 'placeholder',
            }}
            leftIcon="search"
            message="message"
            showButton={true}
            onClickButton={() => alert('?')}
            plusminus={true}
          />
          <KaTextInput
            title="Both icons"
            inputProps={{
              placeholder: 'placeholder',
            }}
            leftIcon="close"
            rightIcon="search"
            message="message"
          />
          <KaTextInput
            title="With width and long sentence"
            inputProps={{
              placeholder: 'search here and see the sentence is very long',
            }}
            leftIcon="search"
            message="width:300px"
            width="300px"
            rightIcon={'close'}
          />
          <KaTextInput
            title="With Unit and long sentence"
            inputProps={{
              placeholder: 'search here and see the sentence is very long',
            }}
            leftIcon="search"
            message="width:300px"
            width="300px"
            leftUnit="$"
            rightUnit="Unit"
            rightIcon={'close'}
          />
          <KaTextInput
            title="Error"
            inputProps={{
              placeholder: 'search here and see the sentence is very long',
            }}
            leftIcon="search"
            message="error input box"
            leftUnit="$"
            rightUnit="Unit"
            rightIcon={'close'}
            isError={true}
            plusminus={true}
            showButton={true}
          />
          <KaTextInput
            title="Disabled"
            inputProps={{
              placeholder: 'search here and see the sentence is very long',
            }}
            leftIcon="search"
            message="width:300px"
            leftUnit="$"
            rightUnit="Unit"
            rightIcon={'close'}
            disabled={true}
            plusminus={true}
            showButton={true}
          />
          <KaTextInput
            title="With pic"
            inputProps={{
              placeholder: 'search here and see the sentence is very long',
            }}
            rightIcon="search"
            message="default picture"
            src="https://square-file.qa.klaytn.net/files/profile/default.png"
          />
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
