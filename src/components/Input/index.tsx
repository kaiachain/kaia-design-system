import { ReactElement, useState } from 'react'
import styled from '@emotion/styled'
import { font, themeFunc } from '../../styles'
import { KaText } from '../Text/Text'
import { useKaTheme } from '../../hooks'
import MathClose from '../../icons/MathClose.svg'

interface StyledContainerProps {
  isFocused: boolean
  isError?: boolean
}

const StyledContainer = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: row;
  border-radius: var(--Radius-6, 360px);
  box-sizing: border-box;
  outline: ${({ isError }) => (isError ? '1px' : '4px')} solid;
  outline-color: ${({ isFocused, isError }) =>
    isError
      ? themeFunc('danger', '6')
      : isFocused
        ? themeFunc('elevation', '8')
        : 'transparent'};
  transition: border-color 0.3s ease;
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  border-radius: var(--Radius-6, 360px);
  border: none;
  background-color: ${themeFunc('elevation', '9')};
  align-items: center;
`

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  gap: var(--Spacing-2, 8px);
  padding: 0px var(--Spacing-4, 16px);
  align-items: center;
`

const StyledClose = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`

const StyledInput = styled.input<{ isError?: boolean }>`
  flex: 1;
  ${font['body/md_600'].styles};
  height: var(--Sizing-8, 40px);
  background-color: transparent;
  text-overflow: ellipsis;

  color: ${({ disabled }) =>
    disabled ? themeFunc('elevation', '6') : themeFunc('gray', '0')};
  border: none;
  box-sizing: border-box;
  ::placeholder {
    color: ${({ isError, disabled }) =>
      isError
        ? themeFunc('danger', '6')
        : disabled
          ? themeFunc('elevation', '6')
          : themeFunc('elevation', '5')};
  }
  :focus {
    outline: none;
  }
  :disabled {
    cursor: not-allowed;
  }
`

export interface KaTextInputProps {
  inputProps: {
    type?: 'text' | 'email' | 'password' | 'number'
    placeholder?: string
    value: string
    onChangeText: (value: string) => void
    style?: React.CSSProperties
  }
  leftComponent?: ReactElement
  rightComponent?: ReactElement
  leftUnit?: string
  rightUnit?: string
  disabled?: boolean
  isError?: boolean
  containerStyle?: React.CSSProperties
}

export const KaTextInput = ({
  leftComponent,
  rightComponent,
  leftUnit,
  rightUnit,
  inputProps = {
    type: 'text',
    placeholder: '',
    value: '',
    onChangeText: () => {},
  },
  disabled,
  isError,
  containerStyle,
}: KaTextInputProps): ReactElement => {
  const { getTheme } = useKaTheme()
  const [onFocus, setOnFocus] = useState(false)

  return (
    <StyledContainer
      isFocused={onFocus}
      isError={isError}
      style={containerStyle}
    >
      <StyledWrapper>
        {leftComponent}
        <StyledInputContainer>
          {leftUnit && (
            <KaText
              fontType="body/md_400"
              style={{
                color: disabled
                  ? getTheme('elevation', '7')
                  : getTheme('elevation', '4'),
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
            isError={isError}
            onChange={({ target: { value } }): void => {
              inputProps.onChangeText?.(value)
            }}
            disabled={disabled}
            {...inputProps}
          />
          {rightUnit && (
            <KaText
              fontType="body/md_400"
              style={{
                color: disabled
                  ? getTheme('elevation', '7')
                  : getTheme('elevation', '4'),
              }}
            >
              {rightUnit}
            </KaText>
          )}
          {inputProps.value && !disabled && (
            <StyledClose
              onClick={(): void => {
                inputProps.onChangeText?.('')
              }}
            >
              <MathClose
                style={{
                  width: 'var(--Sizing-3, 12px)',
                  height: 'var(--Sizing-3, 12px)',
                }}
                fill={getTheme('elevation', '4')}
              />
            </StyledClose>
          )}
        </StyledInputContainer>
        {rightComponent}
      </StyledWrapper>
    </StyledContainer>
  )
}
