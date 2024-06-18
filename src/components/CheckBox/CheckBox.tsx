import { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { themeFunc } from '../../styles'
import { useKaTheme } from '../../hooks'
import ConfirmNormal from '../../icons/ConfirmNormal.svg'

const CheckBoxInput = styled.div<{
  disabled?: boolean
  checked?: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  outline-offset: -1px;
  cursor: pointer;

  ${({ disabled, checked }) =>
    disabled
      ? css`
          background-color: ${themeFunc('elevation', '8')};
          outline-color: ${themeFunc('elevation', '8')};
          cursor: not-allowed;
        `
      : checked
        ? css`
            background-color: ${themeFunc('brand', '5')};
            &:hover {
              background-color: ${themeFunc('brand', '4')};
            }
          `
        : css`
            outline: 1px solid;
            outline-color: ${themeFunc('brand', '5')};
            background-color: ${themeFunc('elevation', '7')};
            &:hover {
              outline-color: ${themeFunc('brand', '4')};
              background-color: ${themeFunc('elevation', '8')};
            }
          `}
`

export type KaCheckBoxProps<T> = {
  checked?: boolean
  value: T
  onClick: (value: T) => void
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

export const KaCheckBox = <T,>({
  onClick,
  value,
  checked,
  size = 'sm',
  disabled,
}: KaCheckBoxProps<T>): ReactElement => {
  const { getTheme } = useKaTheme()

  let sizeVar = ''
  let checkSize = 0
  let borderRadius = 4
  if (size === 'sm') {
    sizeVar = 'var(--Sizing-2, 12px)'
    checkSize = 10
  } else if (size === 'md') {
    sizeVar = 'var(--Sizing-3, 16px)'
    checkSize = 14
  } else if (size === 'lg') {
    sizeVar = 'var(--Sizing-5, 24px)'
    checkSize = 16
    borderRadius = 8
  }

  return (
    <CheckBoxInput
      disabled={disabled}
      onClick={(): void => {
        onClick(value)
      }}
      style={{ borderRadius, width: sizeVar, height: sizeVar }}
      checked={checked}
    >
      {checked && (
        <ConfirmNormal
          fill={getTheme('gray', '10')}
          style={{
            width: checkSize,
            height: checkSize,
          }}
        />
      )}
    </CheckBoxInput>
  )
}
