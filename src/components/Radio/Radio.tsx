import { ReactElement } from 'react'
import styled from '@emotion/styled'
import { themeFunc } from '../../styles'

export type KaRadioProps<T> = {
  selected?: T
  value: T
  onClick: (value: T) => void
  size?: 'sm' | 'md'
  disabled?: boolean
}

const RadioInput = styled.input<any>`
  appearance: none;
  width: ${({ size }) => (size === 'sm' ? '12px' : '16px')};
  height: ${({ size }) => (size === 'sm' ? '12px' : '16px')};
  border-radius: 50%;
  border: 1px solid;
  border-color: ${themeFunc('brand', '5')};
  background-color: ${themeFunc('elevation', '7')};
  outline: none;
  cursor: pointer;

  &:disabled {
    background-color: ${themeFunc('elevation', '8')};
    border-color: ${themeFunc('elevation', '8')};
    cursor: not-allowed;
  }

  &:disabled:checked {
    border-width: ${({ size }) => (size === 'sm' ? '4px' : '5px')};
  }

  &:hover:not(:disabled) {
    background-color: ${themeFunc('elevation', '8')};
  }

  &:checked:not(:disabled) {
    border: ${({ size }) => (size === 'sm' ? '4px' : '5px')} solid;
    border-color: ${themeFunc('brand', '5')};
    background-color: ${themeFunc('gray', '10')};
  }
`

export const KaRadio = <T,>({
  onClick,
  value,
  selected,
  size = 'sm',
  disabled,
}: KaRadioProps<T>): ReactElement => {
  return (
    <RadioInput
      disabled={disabled}
      size={size}
      type="radio"
      readOnly
      checked={selected === value}
      onClick={(): void => {
        onClick(value)
      }}
    />
  )
}
