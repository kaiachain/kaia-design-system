import { ReactElement } from 'react'
import styled, { useTheme } from 'styled-components'

const StyledContainer = styled.div`
  display: inline-flex;
  height: var(--Sizing-4, 20px);
  padding: var(--Spacing-half, 2px) var(--Spacing-2, 8px);
  justify-content: center;
  align-items: center;
  gap: var(--Spacing-2, 8px);
  flex-shrink: 0;
`

export type KaLabelProps = {
  text: string
  color: 'red' | 'gray' | 'blue' | 'green' | 'yellow' | 'primary'
  type: 'solid' | 'pale' | 'line' | 'paleBorder'
}

export const KaLabel = ({ text, color, type }: KaLabelProps): ReactElement => {
  const theme = useTheme()

  let backgroundColor = ''
  if (type === 'solid') {
    switch (color) {
      case 'red':
        backgroundColor = theme.danger._6
        break
      case 'gray':
        backgroundColor = theme.greyscale._5
        break
      case 'blue':
        backgroundColor = theme.info._6
      case 'green':
        backgroundColor = theme.success._6
        break
      case 'yellow':
        backgroundColor = theme.warning._6
        break
      case 'primary':
        backgroundColor = theme.brand._5
        break
    }
  }

  return (
    <StyledContainer
      style={{
        backgroundColor: backgroundColor,
        border: `1px solid ${theme.greyscale._0}`,
      }}
    >
      {text}
    </StyledContainer>
  )
}
