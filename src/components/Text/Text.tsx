import styled from '@emotion/styled'

import { HTMLAttributes, ReactElement, ReactNode } from 'react'
import { themeFunc, font, KaFontType, TthemeFuncR } from '../../styles'

type TStyledTextP = {
  fontType: KaFontType
  themeFuncR?: TthemeFuncR
}

const StyledText = styled.div<TStyledTextP>`
  color: ${({ themeFuncR }) => themeFuncR ?? themeFunc('gray', '0')};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  white-space: pre-wrap;
  word-break: break-word;
  ${({ fontType }) => font[fontType]}
`

export type KaTextProps = {
  children: ReactNode
  color?: string
  inBorder?: boolean
} & TStyledTextP &
  HTMLAttributes<HTMLDivElement>

export const KaText = ({
  color,
  inBorder = false,
  style,
  ...rest
}: KaTextProps): ReactElement => {
  return <StyledText style={{ color, ...style }} {...rest} />
}
