import styled from 'styled-components'

import {
  KaLabel,
  KaText,
  useKaTheme,
  KaRadio,
  KaSelectBox,
} from '@kaiachain/kaia-design-system'

import { Row } from './components/Row'
import Buttons from './Buttons'
import CheckBoxes from './CheckBoxes'
import Texts from './Texts'
import Icons from './Icons'
import { useState } from 'react'
import InputBox from './InputBox'

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
          <KaText fontType="body/lg_400">Normal with disabled option</KaText>
          <KaSelectBox
            selectedValue={selected}
            onSelect={setSelected}
            optionList={[
              { id: '0', label: 'Option 1' },
              { id: '1', label: 'Disabled Option2', isDisabled: true },
              { id: '2', label: 'Option 3' },
            ]}
          />
          <KaText fontType="body/lg_400">
            Width with nesting choices and maxheight
          </KaText>
          <KaSelectBox
            selectedValue={selected}
            onSelect={setSelected}
            width="300px"
            maxHeight="150px"
            optionList={[
              {
                id: '7',
                label: 'Group 1',
                subItems: [
                  {
                    id: '3',
                    label: 'SubItem 1',
                    subItems: [
                      { id: '5', label: 'More SubItem 1' },
                      { id: '6', label: 'More SubItem 2' },
                    ],
                  },
                  { id: '4', label: 'SubItem 2' },
                ],
              },
              { id: '8', label: 'Option 4' },
              { id: '9', label: 'Option 5' },
            ]}
          ></KaSelectBox>
          <KaText fontType="body/lg_400">
            Long choices with more levels but no icon
          </KaText>
          <KaSelectBox
            selectedValue={selected}
            onSelect={setSelected}
            width="300px"
            indentIcon={false}
            placeholder="Here is a placeholder"
            optionList={[
              {
                id: '10',
                label: 'Example very long choice and it will be abbreviated',
              },
              { id: '11', label: 'Option 6' },
              {
                id: '12',
                label: 'Option 7',
                subItems: [
                  {
                    id: '15',
                    label: 'Animals',
                    subItems: [
                      { id: '25', label: 'Tiger' },
                      { id: '26', label: 'Dog' },
                    ],
                  },
                  {
                    id: '24',
                    label: 'Colors',
                    subItems: [
                      { id: '27', label: 'Yellow' },
                      { id: '28', label: 'Orange' },
                    ],
                  },
                ],
              },
              { id: '13', label: 'Option 8' },
              { id: '14', label: 'Option 9' },
            ]}
          ></KaSelectBox>
        </StyledSection>
        <StyledSection>
          <KaText fontType="title/lg_700">TextInput</KaText>
          <InputBox />
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
