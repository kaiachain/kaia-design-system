import { ReactElement } from 'react'
import styled from 'styled-components'

import { KaText } from '../Text/Text'
import { KaFontType } from '../../styles'
import { useKaTheme } from '../../hooks'

const StyledContainer = styled.div`
  width: fit-content;
  display: inline-flex;
  height: var(--Sizing-4, 20px);
  padding: 0 var(--Spacing-2, 8px);
  justify-content: center;
  align-items: center;
  gap: var(--Spacing-2, 8px);
  flex-shrink: 0;
  border-radius: var(--Radius-6, 360px);
  outline: 1px solid transparent;
  outline-offset: -1px;
`

export type KaLabelProps = {
  text: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  color: 'red' | 'gray' | 'blue' | 'green' | 'yellow' | 'primary'
  type?: 'solid' | 'pale' | 'line' | 'paleBorder'
}

export const KaLabel = ({
  size = 'sm',
  text,
  color,
  type = 'solid',
}: KaLabelProps): ReactElement => {
  const { getTheme } = useKaTheme()

  let fontType: KaFontType = `EN/body/${size}_400`
  let height
  if (size === 'xs') {
    height = 'var(--Sizing-4, 20px)'
    fontType = 'EN/body/xs_700'
  } else if (size === 'sm') {
    height = 'var(--Sizing-5, 24px)'
    fontType = 'EN/body/sm_600'
  } else if (size === 'md') {
    height = 'var(--Sizing-6, 28px)'
    fontType = 'EN/body/md_600'
  } else if (size === 'lg') {
    height = 'var(--Sizing-7, 32px)'
    fontType = 'EN/body/lg_600'
  }

  let backgroundColor = ''
  let fontColor = ''
  let outlineColor = ''
  if (type === 'solid') {
    fontColor = getTheme('gray', '10')

    if (color === 'red') backgroundColor = getTheme('danger', '6')
    else if (color === 'gray') backgroundColor = getTheme('gray', '5')
    else if (color === 'blue') backgroundColor = getTheme('info', '6')
    else if (color === 'green') backgroundColor = getTheme('success', '6')
    else if (color === 'yellow') backgroundColor = getTheme('warning', '6')
    else if (color === 'primary') backgroundColor = getTheme('brand', '5')
  } else if (type === 'pale') {
    if (color === 'red') {
      fontColor = getTheme('danger', '4')
      backgroundColor = getTheme('danger', '6', 0.15)
    } else if (color === 'gray') {
      fontColor = getTheme('gray', '3')
      backgroundColor = getTheme('elevation', '8')
    } else if (color === 'blue') {
      fontColor = getTheme('info', '5')
      backgroundColor = getTheme('info', '6', 0.15)
    } else if (color === 'yellow') {
      fontColor = getTheme('warning', '5')
      backgroundColor = getTheme('warning', '6', 0.15)
    } else if (color === 'green') {
      fontColor = getTheme('success', '5')
      backgroundColor = getTheme('success', '6', 0.15)
    } else if (color === 'primary') {
      fontColor = getTheme('brand', '5')
      backgroundColor = getTheme('brand', '5', 0.15)
    }
  } else if (type === 'line') {
    backgroundColor = getTheme('gray', '10')
    if (color === 'red') {
      outlineColor = fontColor = getTheme('danger', '6')
    } else if (color === 'gray') {
      outlineColor = fontColor = getTheme('gray', '5')
    } else if (color === 'blue') {
      outlineColor = fontColor = getTheme('info', '6')
    } else if (color === 'yellow') {
      outlineColor = fontColor = getTheme('warning', '6')
    } else if (color === 'green') {
      outlineColor = fontColor = getTheme('success', '6')
    } else if (color === 'primary') {
      outlineColor = fontColor = getTheme('brand', '5')
    }
  } else if (type === 'paleBorder') {
    outlineColor = getTheme('elevation', '7')
    backgroundColor = getTheme('gray', '10')
    if (color === 'red') {
      fontColor = getTheme('danger', '6')
    } else if (color === 'gray') {
      fontColor = getTheme('gray', '5')
    } else if (color === 'blue') {
      fontColor = getTheme('info', '6')
    } else if (color === 'yellow') {
      fontColor = getTheme('warning', '6')
    } else if (color === 'green') {
      fontColor = getTheme('success', '6')
    } else if (color === 'primary') {
      fontColor = getTheme('brand', '5')
    }
  }

  return (
    <StyledContainer
      style={{
        backgroundColor,
        outlineColor,
        height,
      }}
    >
      <KaText fontType={fontType} color={fontColor}>
        {text}
      </KaText>
    </StyledContainer>
  )
}
