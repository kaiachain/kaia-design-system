import { ReactElement, useState } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import _ from 'lodash'
import ClickAwayListener from 'react-click-away-listener'

import { font, themeFunc } from '../../styles'
import { useKaTheme } from '../../hooks'
import { KaText } from '../Text/Text'
import ChevronBottom from '../../icons/ChevronBottom.svg'
import IndentDownRight from '../../icons/IndentDownRight.svg'

const StyledDropdown = styled.div`
  position: relative;
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
`

const StyledDropdownToggle = styled.div<{
  isError?: boolean
  isFocused?: boolean
}>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 999px;
  background-color: ${themeFunc('elevation', '9')};
  padding: 10px 14px;

  outline: ${({ isError }) => (isError ? '1px' : '4px')} solid;
  outline-color: ${({ isFocused, isError }) =>
    isError
      ? themeFunc('danger', '6')
      : isFocused
        ? themeFunc('elevation', '8')
        : 'transparent'};

  ::after {
    display: none;
  }
`

const StyledIconChevronBottom = styled(ChevronBottom)`
  transition: transform 0.2s ease-in-out;
  position: absolute;
  right: 16px;
  width: 16px;
  height: 16px;
  fill: ${themeFunc('gray', '0')};
`
const StyledIconindent = styled(IndentDownRight)`
  transition: transform 0.2s ease-in-out;
  margin-right: 12px;
  width: 16px;
  height: 16px;
  fill: ${themeFunc('gray', '0')};
`
const dropdownKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: scaleY(0);
  }
  80% {
    opacity: 1;
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
  }
`
const StyledDropdownMenu = styled.div<{ maxHeight?: string }>`
  box-sizing: border-box;
  position: absolute;
  top: 40px;
  border-radius: 14px;
  padding: 8px 0;
  cursor: pointer;
  justify-content: center;
  animation: ${dropdownKeyframes} 0.3s ease-out;
  transform-origin: top;
  width: 100%;
  z-index: 1;
  background-color: ${themeFunc('gray', '10')};
  box-shadow: 0px 4px 12px 0px rgba(25, 26, 28, 0.05);
  max-height: ${(props) => props.maxHeight || 'none'};
  overflow-y: ${(props) => (props.maxHeight ? 'auto' : 'visible')};
  margin-top: 10px;
`
const View = styled.div`
  display: flex;
  flex-direction: column;
`
const Row = styled(View)`
  flex-direction: row;
  align-items: center;
`

const StyledDropdownItem = styled(View)<{
  isSelected?: boolean
  level: number
}>`
  justify-content: center;
  position: relative;
  padding: ${(props) =>
    props.isSelected
      ? '6px 0px'
      : props.level === 0
        ? '14px 16px'
        : `14px ${16 * props.level}px`};
  color: ${themeFunc('gray', '10')};
  font: ${font['body/md_400'].styles};
  :hover {
    background-color: ${themeFunc('elevation', '8')};
  }
  :active {
    font: ${font['body/md_700'].styles};
  }
  :first-of-type {
    border-top: 0;
  }
`
const NeonBar = styled.div`
  width: 4px;
  height: 36px;
  margin-right: 12px;
  background-color: ${themeFunc('brand', '5')};
  transition: background-color 0.3s ease;
  border-radius: 6px;
  justify-content: center;
`
type FormImgProps = {
  src: string
  style?: React.CSSProperties
}
const StyledFormImg = styled.img<FormImgProps>`
  display: inline-block;
  height: 20px;
  width: 20px;
  margin-right: 12px;
`
export interface KaSelectBoxOptionListType {
  value: string
  label: string
  subItems?: KaSelectBoxOptionListType[]
  isDisabled?: boolean
  img?: string
}

export interface KaSelectBoxProps {
  optionList: KaSelectBoxOptionListType[]
  onSelect: (value: string) => void
  selectedValue: string
  placeholder?: string
  indentIcon?: boolean
  containerStyle?: React.CSSProperties
  maxHeight?: string
  isError?: boolean
  disabled?: boolean
}

export const KaSelectBox = ({
  optionList,
  placeholder,
  onSelect,
  selectedValue,
  containerStyle,
  maxHeight,
  indentIcon = true,
  isError,
  disabled,
}: KaSelectBoxProps): ReactElement => {
  const { getTheme } = useKaTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [onFocus, setOnFocus] = useState(false)

  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [selected, setSelected] = useState('')

  const toggleExpand = (value: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(value)) {
        newSet.delete(value)
      } else {
        newSet.add(value)
      }
      return newSet
    })
  }

  const handleSelect = (
    option: KaSelectBoxOptionListType,
    isChild: boolean,
  ) => {
    if (option.subItems) {
      if (!isChild) {
        setSelected(option.label)
      }
      onSelect('')
      toggleExpand(option.value)
    } else {
      if (!isChild) {
        setSelected('')
      }
      onSelect(option.label)
      setExpandedItems(new Set())
      setIsOpen(false)
      setOnFocus(false)
    }
  }

  const renderItem = (
    option: KaSelectBoxOptionListType,
    level: number = 0,
    isChild: boolean = false,
    indentIcon: boolean,
  ) => {
    const isSelected =
      option.label === selectedValue || option.label === selected
    const isExpanded = expandedItems.has(option.value)
    const src = option.img

    return (
      <View key={`Items-${option.value}-${level}`}>
        <StyledDropdownItem
          isSelected={isSelected && !isChild}
          key={`option-${option.value}`}
          level={indentIcon ? level : level + 1}
          onClick={() => {
            if (!option.isDisabled) {
              handleSelect(option, isChild)
            }
          }}
          style={{
            cursor: option.isDisabled ? 'not-allowed' : 'pointer',
            opacity: option.isDisabled ? 0.3 : 1,
          }}
        >
          <Row>
            {!isChild && isSelected && <NeonBar />}
            {indentIcon && isChild && <StyledIconindent />}
            {src && <StyledFormImg src={src} style={{ borderRadius: '50%' }} />}
            <KaText
              fontType={isSelected ? 'body/md_700' : 'body/md_400'}
              color={isSelected ? getTheme('gray', '0') : getTheme('gray', '2')}
              style={{
                width: '92%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {option.label}
            </KaText>
          </Row>
          {option.subItems && (
            <StyledIconChevronBottom
              style={{
                transform: isExpanded ? 'rotate(-180deg)' : 'rotate(0deg)',
              }}
            />
          )}
        </StyledDropdownItem>
        {option.subItems && isExpanded && (
          <View>
            {option.subItems.map((subItem) =>
              renderItem(subItem, level + 1, true, indentIcon),
            )}
          </View>
        )}
      </View>
    )
  }

  return (
    <ClickAwayListener
      onClickAway={(): void => {
        if (!selectedValue) {
          setSelected('')
        }
        setExpandedItems(new Set())
        setIsOpen(false)
        setOnFocus(false)
      }}
    >
      <StyledDropdown style={containerStyle}>
        <StyledDropdownToggle
          onClick={(): void => {
            if (!disabled) {
              setIsOpen(!isOpen)
              setOnFocus(!onFocus)
            }
          }}
          isFocused={onFocus}
          isError={isError}
          style={{
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.3 : 1,
          }}
        >
          <KaText
            fontType="body/md_600"
            color={isError ? getTheme('danger', '6') : getTheme('gray', '0')}
            style={{
              width: '92%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {selectedValue || placeholder || 'Not Selected'}
          </KaText>
          {isOpen ? (
            <StyledIconChevronBottom style={{ transform: 'rotate(-180deg)' }} />
          ) : (
            <StyledIconChevronBottom />
          )}
        </StyledDropdownToggle>
        {isOpen && (
          <StyledDropdownMenu maxHeight={maxHeight}>
            <View>
              {_.map(optionList, (option: KaSelectBoxOptionListType) =>
                renderItem(option, 0, false, indentIcon),
              )}
            </View>
          </StyledDropdownMenu>
        )}
      </StyledDropdown>
    </ClickAwayListener>
  )
}
