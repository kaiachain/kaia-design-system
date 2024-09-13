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
  height: var(--Sizing-8, 40px);
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
  border: ${(props) => (props.isError ? '1px' : '4px')} solid
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
const StyledInput = styled.input<{ isError?: boolean }>`
  flex: 1;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  height: var(--Sizing-8, 40px);
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
    color: ${(props) =>
      props.isError
        ? themeFunc('danger', '6')
        : props.disabled
          ? themeFunc('elevation', '6')
          : themeFunc('elevation', '5')};
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
  disabled?: boolean
  onChangeText?: (text: string) => void
  children?: React.ReactNode
  src?: string
  isError?: boolean
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
  disabled,
  isError,
  onClickButton,
  showButton,
  src,
}: KaTextInputProps): ReactElement => {
  const [inputValue, setInputValue] = useState('')
  const { getTheme } = useKaTheme()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  const [onFocus, setOnFocus] = useState(false)
  const Icons = (type: IconType) => {
    switch (type) {
      case 'search':
        return (
          <SearchNormal
            style={{
              width: 'var(--Sizing-3, 12px)',
              height: 'var(--Sizing-3, 12px)',
            }}
            fill={disabled ? getTheme('elevation', '7') : getTheme('gray', '0')}
          />
        )
      case 'close':
        return (
          <MathClose
            style={{
              width: 'var(--Sizing-3, 12px)',
              height: 'var(--Sizing-3, 12px)',
            }}
            fill={disabled ? getTheme('elevation', '7') : getTheme('gray', '0')}
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
          style={{
            color: isError
              ? getTheme('danger', '6')
              : getTheme('elevation', '1'),
          }}
        >
          {title}
        </KaText>
      )}
      <StyledWrapper
        isFocused={onFocus}
        borderColor={getTheme('elevation', '8')}
        isError={isError}
        errorColor={getTheme('danger', '6')}
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
                color: disabled
                  ? getTheme('elevation', '7')
                  : getTheme('elevation', '4'),
                marginLeft: leftIcon ? '3px' : '8px',
              }}
            >
              {leftUnit}
            </KaText>
          )}

          <StyledInput
            onFocus={(): void => {
              setOnFocus(true)
            }}
            onBlur={(): void => {
              setOnFocus(false)
            }}
            value={inputValue}
            isError={isError}
            onChange={handleInputChange}
            {...inputProps}
          />
          {rightUnit && (
            <KaText
              fontType="body/md_400"
              style={{
                color: disabled
                  ? getTheme('elevation', '7')
                  : getTheme('elevation', '4'),
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
              disabled={disabled}
              type={disabled ? 'secondary' : undefined}
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
              disabled={disabled}
              type={disabled ? 'secondary' : undefined}
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
          style={{
            color: isError
              ? getTheme('danger', '6')
              : getTheme('elevation', '4'),
          }}
        >
          {message}
        </KaText>
      )}
    </StyledContainer>
  )
}
