import styled from 'styled-components'

import { HTMLAttributes, ReactElement, ReactNode } from 'react'
import { themeFunc, font, KaFontType } from '../../styles'

const StyledText = styled.div<{ type: KaFontType }>`
  color: ${themeFunc('gray', '0')};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  white-space: pre-wrap;
  word-break: break-word;
  ${({ type }) => font[type]}
`

export type KaTextProps = {
  fontType: KaFontType
  children: ReactNode
  color?: string
  inBorder?: boolean
} & HTMLAttributes<HTMLDivElement>

export const KaText = ({
  fontType,
  children,
  color,
  inBorder = false,
  style,
  ...rest
}: KaTextProps): ReactElement => {
  return (
    <StyledText
      type={fontType}
      style={{ color, ...style }}
      children={children}
      {...rest}
    />
  )
}
