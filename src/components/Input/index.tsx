import { ReactElement, useMemo, useState } from 'react'
import styled from '@emotion/styled'
import { font, themeFunc } from '../../styles'
import { KaText } from '../Text/Text'
import { useKaTheme } from '../../hooks'
import X from '../../icons/X.svg'
import EyeNormal from '../../icons/EyeNormal.svg'
import EyeSlash from '../../icons/EyeSlash.svg'

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
  width: 100%;
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
    onChangeText?: (value: string) => void
    onKeyDown?: (event: React.KeyboardEvent) => void
    style?: React.CSSProperties
  }
  hideX?: boolean
  leftComponent?: ReactElement
  rightComponent?: ReactElement
  leftUnit?: string
  rightUnit?: string
  readOnly?: boolean
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
  hideX = false,
  readOnly,
  disabled,
  isError,
  containerStyle,
}: KaTextInputProps): ReactElement => {
  const { getTheme } = useKaTheme()
  const [onFocus, setOnFocus] = useState(false)
  const { type: originalType, onChangeText, ...otherInputProps } = inputProps

  const [showPassword, setShowPassword] = useState(false)
  const inputType = useMemo(() => {
    return originalType === 'password' && showPassword ? 'text' : originalType
  }, [originalType, showPassword])

  const handleContextMenu = (e: React.MouseEvent): void => {
    if (originalType === 'password') {
      e.preventDefault()
    }
  }

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
              onChangeText?.(value)
            }}
            readOnly={readOnly}
            disabled={disabled}
            autoComplete={
              originalType === 'password' ? 'new-password' : undefined
            }
            onContextMenu={handleContextMenu}
            {...otherInputProps}
            type={inputType}
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
          {!readOnly && inputProps.value && !disabled && (
            <>
              {inputProps.type === 'password' ? (
                <StyledClose
                  onClick={(): void => {
                    setShowPassword(!showPassword)
                  }}
                >
                  {showPassword ? (
                    <EyeSlash
                      style={{
                        width: 'var(--Sizing-3, 12px)',
                        height: 'var(--Sizing-3, 12px)',
                        color: getTheme('elevation', '4'),
                      }}
                    />
                  ) : (
                    <EyeNormal
                      style={{
                        width: 'var(--Sizing-3, 12px)',
                        height: 'var(--Sizing-3, 12px)',
                        color: getTheme('elevation', '4'),
                      }}
                    />
                  )}
                </StyledClose>
              ) : hideX ? undefined : (
                <StyledClose
                  onClick={(): void => {
                    inputProps.onChangeText?.('')
                  }}
                >
                  <X
                    style={{
                      width: 'var(--Sizing-3, 12px)',
                      height: 'var(--Sizing-3, 12px)',
                    }}
                    fill={getTheme('elevation', '4')}
                  />
                </StyledClose>
              )}
            </>
          )}
        </StyledInputContainer>
        {rightComponent}
      </StyledWrapper>
    </StyledContainer>
  )
}
