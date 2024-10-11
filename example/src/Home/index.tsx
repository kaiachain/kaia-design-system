import styled from 'styled-components'

import {
  KaLabel,
  KaText,
  useKaTheme,
  KaRadio,
  KaTextInput,
  KaButton,
  KaSelectBox,
  KaIcon,
} from '@kaiachain/kaia-design-system'

import { Row } from './components/Row'
import Buttons from './Buttons'
import CheckBoxes from './CheckBoxes'
import Texts from './Texts'
import Icons from './Icons'
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
  const [selected, setSelected] = useState<string>('')

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
          <Icons />
        </StyledSection>
        <StyledSection>
          <KaText fontType="title/lg_700">Labels</KaText>

          <KaLabel size="md" color="red" text="text" type="solid" />
          <KaLabel size="md" color="red" text="text" type="pale" />
          <KaLabel size="md" color="red" text="text" type="line" />
          <KaLabel size="md" color="red" text="text" type="paleBorder" />
        </StyledSection>
        <StyledSection>
          <KaText fontType="title/lg_700">SelectBox </KaText>
          <KaText fontType="body/lg_400">
            Normal with disabled option with img
          </KaText>
          <KaSelectBox
            selectedValue={selected}
            onSelect={setSelected}
            optionList={[
              {
                value: '0',
                label: 'Option 1',
                img: 'https://square-file.qa.klaytn.net/files/profile/default.png',
              },
              { value: '1', label: 'Disabled Option2', isDisabled: true },
              { value: '2', label: 'Option 3' },
            ]}
          />
          <KaText fontType="body/lg_400">
            Width with nesting choices with img and maxheight
          </KaText>
          <KaSelectBox
            selectedValue={selected}
            onSelect={setSelected}
            containerStyle={{ width: '500px' }}
            maxHeight="150px"
            optionList={[
              {
                value: '7',
                label: 'Option Group 1',
                subItems: [
                  {
                    value: '3',
                    label: 'SubItem 1',
                    img: 'https://square-file.qa.klaytn.net/files/profile/default.png',
                    subItems: [
                      {
                        value: '5',
                        label: 'More SubItem 1',
                        img: 'https://square-file.qa.klaytn.net/files/profile/default.png',
                      },
                      { value: '6', label: 'More SubItem 2' },
                    ],
                  },
                  { value: '4', label: 'SubItem 2' },
                ],
              },
              { value: '8', label: 'Option 4' },
              { value: '9', label: 'Option 5' },
            ]}
          ></KaSelectBox>
          <KaText fontType="body/lg_400">
            Long choices with more levels but no icon
          </KaText>
          <KaSelectBox
            selectedValue={selected}
            onSelect={setSelected}
            containerStyle={{ width: '300px' }}
            indentIcon={false}
            placeholder="Here is a placeholder"
            optionList={[
              {
                value: '10',
                label: 'Example very long choice and it will be abbreviated',
              },
              { value: '11', label: 'Option 6' },
              {
                value: '12',
                label: 'Option 7',
                subItems: [
                  {
                    value: '15',
                    label: 'Animals',
                    subItems: [
                      { value: '25', label: 'Tiger' },
                      { value: '26', label: 'Dog' },
                    ],
                  },
                  {
                    value: '24',
                    label: 'Colors',
                    subItems: [
                      { value: '27', label: 'Yellow' },
                      { value: '28', label: 'Orange' },
                    ],
                  },
                ],
              },
              { value: '13', label: 'Option 8' },
              { value: '14', label: 'Option 9' },
            ]}
          ></KaSelectBox>
          <KaText fontType="body/lg_400">Disabled</KaText>
          <KaSelectBox
            disabled={true}
            selectedValue={selected}
            onSelect={setSelected}
            placeholder="Disabled selectbox"
            optionList={[
              {
                value: '15',
                label: 'will not be shown',
              },
            ]}
          ></KaSelectBox>
          <KaText fontType="body/lg_400">Error</KaText>
          <KaSelectBox
            isError={true}
            selectedValue={selected}
            onSelect={setSelected}
            placeholder="Error selectbox"
            optionList={[
              {
                value: '16',
                label: 'Error',
              },
            ]}
          ></KaSelectBox>
        </StyledSection>
        <StyledSection>
          <KaText fontType="title/lg_700">TextInput</KaText>
          <KaTextInput
            inputProps={{
              placeholder: 'placeholder',
              value: value,
              onChangeText: setValue,
            }}
          />
          <KaTextInput
            inputProps={{
              type: 'password',
              placeholder: 'placeholder',
              value: value,
              onChangeText: setValue,
              style: { color: 'red' },
            }}
            rightUnit="$"
          />
          <KaTextInput
            inputProps={{
              type: 'number',
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
              value,
              onChangeText: setValue,
              placeholder: 'placeholder',
            }}
            rightComponent={<KaButton size="md">Confirm</KaButton>}
            leftUnit="$"
          />
          <KaTextInput
            inputProps={{
              value,
              onChangeText: setValue,
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
              value,
              onChangeText: setValue,
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
              value,
              onChangeText: setValue,
              placeholder: 'search here and see the sentence is very long',
            }}
            leftUnit="$"
            rightUnit="Unit"
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
