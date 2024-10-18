import { ReactElement } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useKaTheme } from '../../hooks'
import Check from '../../icons/Check.svg'

const CheckBoxInput = styled.div<{
  disabled?: boolean
  checked?: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  outline-offset: -1px;
  cursor: pointer;

  ${({ disabled, checked, theme }) =>
    disabled
      ? css({
          backgroundColor: theme.elevation[8],
          outlineColor: theme.elevation[8],
          cursor: 'not-allowed',
        })
      : checked
        ? css({
            backgroundColor: theme.brand[5],
            '&:hover': {
              backgroundColor: theme.brand[4],
            },
          })
        : css({
            outline: '1px solid',
            outlineColor: theme.brand[5],
            backgroundColor: theme.elevation[7],
            '&:hover': {
              outlineColor: theme.brand[4],
              backgroundColor: theme.elevation[8],
            },
          })}
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
        <Check
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
