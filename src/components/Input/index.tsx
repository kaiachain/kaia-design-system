import { ReactElement, useState } from 'react'
import styled from '@emotion/styled'
import { darkTheme, KaFontType, themeFunc } from '../../styles'
import { KaText } from '../Text/Text'
import { useKaTheme } from '../../hooks'
import MathClose from '../../icons/MathClose.svg'
import SearchNormal from '../../icons/SearchNormal.svg'
import MathPlus from '../../icons/MathPlus.svg'
import MathMinus from '../../icons/MathMinus.svg'
import { KaButton } from '../Button/Button'

const StyledContainer = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || '100%'};
  gap: 5px;
`
const StyledInputContainer = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: row;
  flex: 1;
  border-radius: var(--Radius-6, 360px);
  border: none;
  gap: 3px;

  background-color: ${themeFunc('elevation', '9')};
  align-items: center;
  padding: 0;

  width: ${(props) => props.width || 'auto'};
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: var(--Radius-6, 360px);
  height: var(--Sizing-8, 40px);
  box-sizing: border-box;
  gap: 3px;
  border: 1px solid
    ${(props: {
      isFocused: boolean
      borderColor: string
      isError: boolean | undefined
      errorColor: string
    }): string =>
      props.isError
        ? props.errorColor
        : props.isFocused
          ? props.borderColor
          : 'transparent'};
  transition: border-color 0.3s ease;
`
const StyledInput = styled.input`
  flex: 1;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  background-color: transparent;
  text-overflow: ellipsis;

  color: ${themeFunc('gray', '0')};
  border: none;
  padding-left: 8px;
  ::placeholder {
    font-size: 14px;
    font-family: Manrope;
    line-height: 20px;
    font-weight: 600;
    color: ${themeFunc('elevation', '5')};
  }
  :focus {
    outline: none;
  }
`
const StyledIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`
type FormImgProps = {
  src: string
  style?: React.CSSProperties
}
const StyledFormImg = styled.img<FormImgProps>`
  display: inline-block;
  height: 34px;
  width: 34px;
`
const IconList = ['search', 'close'] as const
type IconType = (typeof IconList)[number]

export interface KaTextInputProps {
  title?: string
  inputProps?: {
    placeholder?: string
    value?: string
    readOnly?: boolean
  }
  leftIcon?: IconType | ReactElement
  rightIcon?: IconType | ReactElement
  leftUnit?: string
  rightUnit?: string
  width?: string
  message?: string
  plusminus?: boolean
  onPlus?: () => void
  onMinus?: () => void
  onClickButton?: () => void
  showButton?: boolean
  type?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'tertiary-tint'
    | 'red'
    | 'redLine'
  disabled?: boolean
  onChangeText?: (text: string) => void
  children?: React.ReactNode
  src?: string
}

export const KaTextInput = ({
  title,
  leftIcon,
  rightIcon,
  leftUnit,
  rightUnit,
  width,
  message,
  plusminus,
  inputProps,
  onChangeText,
  onClickButton,
  showButton,
  src,
}: KaTextInputProps): ReactElement => {
  const [inputValue, setInputValue] = useState('')
  const { getTheme } = useKaTheme()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  const Icons = (type: IconType) => {
    switch (type) {
      case 'search':
        return (
          <SearchNormal
            style={{
              width: 'var(--Sizing-3, 12px)',
              height: 'var(--Sizing-3, 12px)',
            }}
            fill={getTheme('gray', '0')}
          />
        )
      case 'close':
        return (
          <MathClose
            style={{
              width: 'var(--Sizing-3, 12px)',
              height: 'var(--Sizing-3, 12px)',
            }}
            fill={getTheme('gray', '0')}
          />
        )
      default:
        return null
    }
  }
  return (
    <StyledContainer width={width}>
      {title && (
        <KaText
          fontType="body/md_600"
          style={{ color: getTheme('elevation', '1') }}
        >
          {title}
        </KaText>
      )}
      <StyledWrapper
        isFocused={false}
        borderColor={getTheme('gray', '9')}
        isError={false}
        errorColor={getTheme('warning', '6')}
      >
        <StyledInputContainer>
          {src && <StyledFormImg src={src} style={{ borderRadius: '50%' }} />}
          {typeof leftIcon === 'string' && IconList.includes(leftIcon) ? (
            <StyledIconBox
              style={{
                paddingLeft: '10px',
                width: 'var(--Sizing-5, 24px)',
                height: 'var(--Sizing-5, 24px)',
              }}
            >
              {Icons(leftIcon)}
            </StyledIconBox>
          ) : (
            leftIcon
          )}
          {leftUnit && (
            <KaText
              fontType="body/md_400"
              style={{
                color: getTheme('elevation', '4'),
                marginLeft: leftIcon ? '3px' : '8px',
              }}
            >
              {leftUnit}
            </KaText>
          )}

          <StyledInput
            value={inputValue}
            onChange={handleInputChange}
            {...inputProps}
          />
          {rightUnit && (
            <KaText
              fontType="body/md_400"
              style={{
                color: getTheme('elevation', '4'),
                marginRight: rightIcon ? '3px' : '10px',
              }}
            >
              {rightUnit}
            </KaText>
          )}
          {typeof rightIcon === 'string' && IconList.includes(rightIcon) ? (
            <StyledIconBox
              style={{
                width: 'var(--Sizing-5, 24px)',
                height: 'var(--Sizing-5, 24px)',
                paddingRight: '10px',
              }}
            >
              {Icons(rightIcon)}
            </StyledIconBox>
          ) : (
            rightIcon
          )}
          {plusminus && (
            <KaButton
              leftIcon="check"
              rightIcon="right"
              size="md"
              onClick={onClickButton}
            >
              {''}
            </KaButton>
          )}
          {showButton && (
            <KaButton
              leftIcon="check"
              rightIcon="right"
              size="md"
              onClick={onClickButton}
            >
              {'Button'}
            </KaButton>
          )}
        </StyledInputContainer>
      </StyledWrapper>
      {message && (
        <KaText
          fontType="body/sm_400"
          style={{ color: getTheme('elevation', '4') }}
        >
          {message}
        </KaText>
      )}
    </StyledContainer>
  )
}
