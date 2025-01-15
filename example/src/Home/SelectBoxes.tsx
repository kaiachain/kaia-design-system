import { useState } from 'react'
import { KaText, KaSelectBox } from '@kaiachain/kaia-design-system'
import kaiaLogo from '../assets/kaia.svg'

const SelectBoxes = () => {
  const [selected, setSelected] = useState<string>('')

  return (
    <>
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
            img: <img src="https://dummyimage.com/100x100/000/fff" />,
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
                img: 'https://dummyimage.com/100x100/000/fff',
                subItems: [
                  {
                    value: '5',
                    label: 'More SubItem 1',
                    img: <img src={kaiaLogo} />,
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
      />
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
      />
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
      />
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
      />
    </>
  )
}

export default SelectBoxes
