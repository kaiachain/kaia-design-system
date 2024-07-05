import React, { ReactElement } from 'react'
import styled from '@emotion/styled'
import { KaFontType, themeFunc } from '../../styles'
import { KaText } from '../Text/Text'
import { useKaTheme } from '../../hooks'

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  padding: var(--Spacing-1, 4px);
  justify-content: center;
  align-items: center;
  gap: var(--Spacing-half, 2px);
  align-self: stretch;
  border-radius: var(--Radius-6, 360px);
  border: none;
  background-color: transparent;

  &:disabled {
    cursor: not-allowed;
    border: 1px solid ${themeFunc('elevation', '8')};
    background: ${themeFunc('elevation', '8')};
  }
`

const StyledPrimaryButton = styled(StyledButton)`
  background-color: ${themeFunc('brand', '5')};
  &:hover:not(:disabled) {
    background-color: ${themeFunc('brand', '6')};
  }
`

const StyledSecondaryButton = styled(StyledButton)`
  border: 1px solid ${themeFunc('brand', '4')};
  &:hover:not(:disabled) {
    border: 1px solid ${themeFunc('brand', '5')};
  }
`

const StyledTertiaryButton = styled(StyledButton)`
  background-color: ${themeFunc('elevation', '5')};
`

const StyledRedButton = styled(StyledButton)`
  background-color: ${themeFunc('danger', '5')};
  &:hover:not(:disabled) {
    background-color: ${themeFunc('danger', '6')};
  }
`

const StyledRedLineButton = styled(StyledButton)`
  border: 1px solid ${themeFunc('danger', '5')};
  &:hover:not(:disabled) {
    border: 1px solid ${themeFunc('danger', '6')};
  }
`

interface KaButtonProps {
  type?: 'primary' | 'secondary' | 'tertiary' | 'red' | 'redLine'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  onClick: () => void
  children: React.ReactNode
}

export const KaButton = ({
  type = 'primary',
  size = 'sm',
  children,
  ...rest
}: KaButtonProps): ReactElement => {
  const { getTheme } = useKaTheme()

  let BtnComp = StyledPrimaryButton
  let fontColor = ''
  if (type === 'primary') {
    fontColor = getTheme('gray', '10')
    BtnComp = StyledPrimaryButton
  } else if (type === 'secondary') {
    fontColor = getTheme('brand', '5')
    BtnComp = StyledSecondaryButton
  } else if (type === 'tertiary') {
    fontColor = getTheme('elevation', '4')
    BtnComp = StyledTertiaryButton
  } else if (type === 'red') {
    fontColor = getTheme('gray', '0')
    BtnComp = StyledRedButton
  } else if (type === 'redLine') {
    fontColor = getTheme('danger', '6')
    BtnComp = StyledRedLineButton
  }

  let fontType: KaFontType = 'body/sm_700'
  let height
  if (size === 'sm') {
    fontType = 'body/xs_700'
    height = 'var(--Sizing-7, 32px)'
  } else if (size === 'md') {
    fontType = 'body/md_700'
    height = 'var(--Sizing-8, 40px)'
  } else if (size === 'lg') {
    fontType = 'body/lg_700'
    height = 'var(--Sizing-9, 48px)'
  } else if (size === 'xl') {
    fontType = 'body/xl_700'
    height = 'var(--Sizing-10, 56px)'
  }

  return (
    <BtnComp style={{ height }} {...rest}>
      {['number', 'string'].includes(typeof children) ? (
        <KaText
          fontType={fontType}
          color={rest.disabled ? getTheme('elevation', '4') : fontColor}
          style={{ padding: '0 12px' }}
        >
          {children}
        </KaText>
      ) : (
        children
      )}
    </BtnComp>
  )
}
