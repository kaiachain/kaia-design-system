import styled from '@emotion/styled'

import { HTMLAttributes, ReactElement, ReactNode } from 'react'
import { themeFunc, font, KaFontType } from '../../styles'

const StyledText = styled.div<{ type: KaFontType }>`
  color: ${themeFunc('gray', '0')};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  white-space: pre-wrap;
  word-break: break-word;
  ${({ type }) => {
    const styles = font[type]
    if (type.startsWith('num/')) {
      return `
        ${styles}
        font-variant-numeric: lining-nums tabular-nums;
      `
    }
    return styles
  }}
`

export type KaTextProps = {
  fontType: KaFontType
  children: ReactNode
  color?: string
  center?: boolean
} & HTMLAttributes<HTMLDivElement>

export const KaText = ({
  fontType,
  children,
  color,
  center,
  style,
  ...rest
}: KaTextProps): ReactElement => {
  return (
    <StyledText
      type={fontType}
      style={{ color, textAlign: center ? 'center' : 'inherit', ...style }}
      children={children}
      {...rest}
    />
  )
}
