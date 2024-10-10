import styled from 'styled-components'

import {
  KaLabel,
  KaIcon,
  KaText,
  useKaTheme,
  KaRadio,
  KaTextInput,
  KaButton,
} from '@kaiachain/kaia-design-system'

import { Row } from './components/Row'
import Buttons from './Buttons'
import CheckBoxes from './CheckBoxes'
import Texts from './Texts'
import { useState } from 'react'
import { View } from './components/View'

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
  const [value, setValue] = useState<string>('')

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
          <Row>
            <KaIcon.KaiaBrandmark_white
              style={{ width: 20, height: 20 }}
              stroke="blue"
            />
            <KaIcon.KaiaBrandmark_neonlime style={{ width: 20, height: 20 }} />
            <KaIcon.KaiaBrandmark_black style={{ width: 20, height: 20 }} />
            <KaIcon.KaiaWordmark_white
              style={{ width: 50, height: 20 }}
              stroke="blue"
            />

            <KaIcon.KaiaWordmark_neonlime style={{ width: 50, height: 20 }} />
            <KaIcon.KaiaWordmark_black style={{ width: 50, height: 20 }} />
          </Row>
          <Row>
            <KaIcon.Dark_Symbol_KaiaCritters
              style={{ width: 60, height: 60 }}
            />
            <KaIcon.Light_Symbol_KaiaCritters
              style={{ width: 60, height: 60 }}
            />
            <KaIcon.Dark_Symbol_KaiaSquare style={{ width: 60, height: 60 }} />
            <KaIcon.Light_Symbol_KaiaSquare style={{ width: 60, height: 60 }} />
            <KaIcon.Dark_Symbol_KaiaPortal style={{ width: 60, height: 60 }} />
            <KaIcon.Light_Symbol_KaiaPortal style={{ width: 60, height: 60 }} />
            <KaIcon.Dark_Symbol_KaiaScan style={{ width: 60, height: 60 }} />
            <KaIcon.Light_Symbol_KaiaScan style={{ width: 60, height: 60 }} />
            <KaIcon.Dark_Symbol_KaiaDoc style={{ width: 60, height: 60 }} />
            <KaIcon.Light_Symbol_KaiaDoc style={{ width: 60, height: 60 }} />
            <KaIcon.Dark_Symbol_KaiaGovernanceForum
              style={{ width: 60, height: 60 }}
            />
            <KaIcon.Light_Symbol_KaiaGovernanceForum
              style={{ width: 60, height: 60 }}
            />
            <KaIcon.Dark_Symbol_KaiaDevHub style={{ width: 60, height: 60 }} />
            <KaIcon.Light_Symbol_KaiaDevHub style={{ width: 60, height: 60 }} />
            <KaIcon.Dark_Symbol_KaiaWallet style={{ width: 60, height: 60 }} />
            <KaIcon.Light_Symbol_KaiaWallet style={{ width: 60, height: 60 }} />
            <KaIcon.Dark_Symbol_KaiaDevForum
              style={{ width: 60, height: 60 }}
            />
            <KaIcon.Light_Symbol_KaiaDevForum
              style={{ width: 60, height: 60 }}
            />
          </Row>
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
            inputProps={{
              placeholder: 'placeholder',
              value: value,
              onChangeText: setValue,
            }}
          />{' '}
          <KaTextInput
            inputProps={{
              placeholder: 'placeholder',
              value: value,
              onChangeText: setValue,
            }}
            rightUnit="$"
          />
          <KaTextInput
            inputProps={{
              placeholder: 'placeholder',
              value: value,
              onChangeText: setValue,
            }}
            leftUnit="$"
          />
          <KaTextInput
            inputProps={{
              placeholder: 'placeholder',
              value: value,
              onChangeText: setValue,
            }}
            leftComponent={
              <View style={{ width: 24, paddingLeft: 4 }}>
                <KaIcon.SearchNormal fill="dark" />
              </View>
            }
            leftUnit="$"
            rightUnit="SGD"
          />
          <KaTextInput
            inputProps={{
              placeholder: 'placeholder',
            }}
            rightComponent={<KaButton size="md">Confirm</KaButton>}
            leftUnit="$"
          />
          <KaTextInput
            inputProps={{
              placeholder: 'search here and see the sentence is very long',
            }}
            leftComponent={
              <View style={{ width: 24, paddingLeft: 4 }}>
                <KaIcon.SearchNormal fill="dark" />
              </View>
            }
            containerStyle={{ width: 300 }}
            rightComponent={<KaButton size="md">Confirm</KaButton>}
          />
          <KaTextInput
            inputProps={{
              placeholder: 'search here and see the sentence is very long',
            }}
            leftComponent={
              <View style={{ width: 24, paddingLeft: 4 }}>
                <KaIcon.SearchNormal fill="dark" />
              </View>
            }
            leftUnit="$"
            rightUnit="Unit"
            rightComponent={<KaButton size="md">Confirm</KaButton>}
            isError={true}
          />
          <KaTextInput
            inputProps={{
              placeholder: 'search here and see the sentence is very long',
            }}
            //  leftComponent="search"
            leftUnit="$"
            rightUnit="Unit"
            //rightComponent={'close'}
            disabled={true}
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
