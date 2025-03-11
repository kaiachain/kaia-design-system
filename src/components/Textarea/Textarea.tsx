import React, { ReactElement, useState } from 'react'
import styled from '@emotion/styled'

import { useKaTheme } from '../../hooks'
import { font, themeFunc } from '../../styles'
import { KaText } from '../Text/Text'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex: 1;
  box-sizing: border-box;
  align-items: flex-start;
  gap: var(--Spacing-2, 8px);
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-end;
  gap: 10px;
`

const StyledTextareaWrapper = styled.div<{
  isActive?: boolean
  isError?: boolean
}>`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
  box-sizing: border-box;
  border-radius: var(--Radius-3, 24px);
  background-color: ${themeFunc('elevation', '9')};
  padding: var(--Spacing-4, 16px) var(--Spacing-5, 20px);

  outline: ${({ isActive, isError }) => {
    if (isError) {
      return '1px solid'
    } else if (isActive) {
      return '4px solid'
    } else {
      return 'none'
    }
  }};
  outline-color: ${({ isError, isActive }) => {
    if (isError) {
      return themeFunc('danger', '6')
    } else if (isActive) {
      return themeFunc('elevation', '8')
    } else {
      return 'transparent'
    }
  }};
`

const StyledTextarea = styled.textarea<{
  disabled?: boolean
  isError?: boolean
}>`
  width: 100%;
  height: 100%;
  flex: 1;
  ${font['body/md_400'].styles};
  background-color: transparent;
  text-overflow: ellipsis;
  box-sizing: border-box;
  resize: none;
  outline: none;
  border: none;
  color: ${({ disabled, isError }) => {
    if (isError) {
      return themeFunc('danger', '6')
    } else if (disabled) {
      return themeFunc('elevation', '6')
    } else {
      return themeFunc('gray', '0')
    }
  }};

  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::placeholder {
    color: ${({ isError, disabled }) => {
      if (isError) {
        return themeFunc('danger', '6')
      } else if (disabled) {
        return themeFunc('elevation', '6')
      } else {
        return themeFunc('elevation', '5')
      }
    }};
  }
`

export interface KaTextareaProps {
  title?: string
  maxNumOfChar?: string
  message?: string
  textareaProps: {
    text: string
    onChangeText: (text: string) => void
    placeholder?: string
    onKeyDown?: (event: React.KeyboardEvent) => void
    rows?: number
  }
  disabled?: boolean
  isError?: boolean
}

export const KaTextarea = ({
  title,
  maxNumOfChar,
  message,
  textareaProps = {
    text: '',
    onChangeText: () => {},
    placeholder: 'placeholder',
  },
  disabled,
  isError,
}: KaTextareaProps): ReactElement => {
  const { getTheme } = useKaTheme()
  const { text, onChangeText, ...textareaRest } = textareaProps
  const [isActive, setIsActive] = useState(false)

  const handleTextChange = (text: string): void => {
    if (maxNumOfChar && !isNaN(Number(maxNumOfChar))) {
      const maxLength = Number(maxNumOfChar)
      if (text.length <= maxLength) {
        onChangeText(text)
      } else {
        onChangeText(text.slice(0, maxLength))
      }
    } else {
      onChangeText(text)
    }
  }

  return (
    <StyledContainer>
      {(title || maxNumOfChar) && (
        <Row
          style={{
            justifyContent: title ? 'space-between' : 'flex-end',
          }}
        >
          {title && (
            <KaText
              fontType="body/md_600"
              color={
                isError ? getTheme('danger', '6') : getTheme('elevation', '1')
              }
              style={{
                textOverflow: 'ellipsis',
              }}
            >
              {title}
            </KaText>
          )}
          {maxNumOfChar && (
            <KaText
              fontType="num/body/md_400"
              color={getTheme('gray', '7')}
              style={{ whiteSpace: 'nowrap' }}
            >
              {text.length.toLocaleString()}/
              {Number(maxNumOfChar).toLocaleString()}
            </KaText>
          )}
        </Row>
      )}
      <StyledTextareaWrapper isError={isError} isActive={isActive}>
        <StyledTextarea
          value={text}
          onChange={({ target: { value } }): void => {
            handleTextChange(value)
          }}
          onFocus={(): void => setIsActive(true)}
          onClick={(): void => setIsActive(true)}
          onKeyDown={(): void => setIsActive(true)}
          onBlur={(): void => setIsActive(false)}
          disabled={disabled}
          isError={isError}
          {...textareaRest}
        />
      </StyledTextareaWrapper>
      {message && (
        <KaText
          fontType="body/sm_400"
          color={isError ? getTheme('danger', '6') : getTheme('elevation', '4')}
        >
          {message}
        </KaText>
      )}
    </StyledContainer>
  )
}
