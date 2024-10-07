import React, { ReactElement, useMemo, useState } from 'react'
import styled from '@emotion/styled'

import { darkTheme, KaFontType, themeFunc } from '../../styles'
import { KaText } from '../Text/Text'
import { useKaTheme } from '../../hooks'
import Chevron_right from '../../icons/Chevron_right.svg'
import Arrowfatline_upright from '../../icons/Arrowfatline_upright.svg'
import ConfirmNormal from '../../icons/ConfirmNormal.svg'

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  padding: var(--Spacing-1, 4px);
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: var(--Radius-6, 360px);
  border: none;
  background-color: transparent;

  &:disabled {
    cursor: not-allowed;
    border: 1px solid ${themeFunc('elevation', '8')};
    background: ${themeFunc('elevation', '8')};
  }
  &:focus-visible {
    outline: 4px solid ${themeFunc('elevation', '8')};
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
  background-color: ${themeFunc('elevation', '10')};
  border: 1px solid ${themeFunc('elevation', '4')};
`

const StyledTertiaryTintButton = styled(StyledButton)`
  background-color: ${themeFunc('elevation', '9')};

  &:disabled {
    border: none;
  }
`

const StyledRedButton = styled(StyledButton)`
  background-color: ${themeFunc('danger', '5')};
  &:hover:not(:disabled) {
    background-color: ${themeFunc('danger', '7')};
  }
`

const StyledRedLineButton = styled(StyledButton)`
  border: 1px solid ${themeFunc('danger', '5')};
  &:hover:not(:disabled) {
    border: 1px solid ${themeFunc('danger', '7')};
  }
`

const StyledIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

const StyledPrimaryIconBox = styled(StyledIconBox)<{ disabled?: boolean }>`
  background-color: ${({ disabled }) =>
    disabled ? themeFunc('elevation', '9') : themeFunc('gray', '10')};
`

const StyledSecondaryIconBox = styled(StyledIconBox)<{ disabled?: boolean }>`
  background-color: ${themeFunc('elevation', '9')};
`

const StyledLedLineIconBox = styled(StyledIconBox)<{ disabled?: boolean }>`
  background-color: ${({ disabled }) =>
    disabled ? themeFunc('elevation', '9') : themeFunc('elevation', '8')};
`

const IconList = ['check', 'right', 'upright'] as const
type IconType = (typeof IconList)[number]

interface KaButtonProps {
  leftIcon?: IconType | ReactElement
  rightIcon?: IconType | ReactElement
  type?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'tertiary-tint'
    | 'red'
    | 'redLine'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  onClick?: () => void
  children: React.ReactNode
  fill?: boolean
  style?: React.CSSProperties
}

export const KaButton = ({
  leftIcon,
  rightIcon,
  type = 'primary',
  size = 'sm',
  children,
  fill,
  style,
  ...rest
}: KaButtonProps): ReactElement => {
  const { getTheme } = useKaTheme()
  const [hover, setHover] = useState(false)

  const { BtnComp, IconBoxComp, fontColor, iconColor } = useMemo(() => {
    let BtnComp = StyledPrimaryButton
    let IconBoxComp = StyledPrimaryIconBox
    let fontColor = darkTheme.gray[10]
    let iconColor = getTheme('gray', '0')

    if (type === 'secondary') {
      if (hover) {
        fontColor = iconColor = getTheme('brand', '4')
      } else {
        fontColor = iconColor = getTheme('brand', '5')
      }
      BtnComp = StyledSecondaryButton
      IconBoxComp = StyledSecondaryIconBox
    } else if (type === 'tertiary') {
      if (hover) {
        iconColor = fontColor = getTheme('elevation', '5')
      } else {
        iconColor = fontColor = getTheme('elevation', '4')
      }
      BtnComp = StyledTertiaryButton
      IconBoxComp = StyledSecondaryIconBox
    } else if (type === 'tertiary-tint') {
      if (hover) {
        iconColor = fontColor = getTheme('brand', '4')
      } else {
        iconColor = fontColor = getTheme('brand', '5')
      }
      BtnComp = StyledTertiaryTintButton
      IconBoxComp = StyledSecondaryIconBox
    } else if (type === 'red') {
      BtnComp = StyledRedButton
    } else if (type === 'redLine') {
      if (hover) {
        fontColor = iconColor = getTheme('danger', '7')
      } else {
        iconColor = fontColor = getTheme('danger', '6')
      }
      BtnComp = StyledRedLineButton
      IconBoxComp = StyledLedLineIconBox
    }

    return {
      BtnComp,
      IconBoxComp,
      fontColor,
      iconColor,
    }
  }, [type, getTheme, hover])

  const { fontType, height, iconBoxSize, iconSize, fontPadding } =
    useMemo(() => {
      let fontType: KaFontType = 'body/sm_700'
      let height
      let iconBoxSize
      let iconSize
      let fontPadding
      if (size === 'sm') {
        fontType = 'body/sm_700'
        height = 'var(--Sizing-7, 32px)'
        iconSize = 'var(--Sizing-2, 12px)'
        iconBoxSize = 'var(--Sizing-5, 24px)'
        fontPadding = '0px var(--Spacing-2, 8px)'
      } else if (size === 'md') {
        fontType = 'body/md_700'
        height = 'var(--Sizing-8, 40px)'
        iconSize = 'var(--Sizing-3, 16px)'
        iconBoxSize = 'var(--Sizing-7, 32px)'
        fontPadding = '0px var(--Spacing-3, 12px)'
      } else if (size === 'lg') {
        fontType = 'body/lg_700'
        height = 'var(--Sizing-9, 48px)'
        iconSize = 'var(--Sizing-4, 20px)'
        iconBoxSize = 'var(--Sizing-8, 40px)'
        fontPadding = '0px var(--Spacing-4, 16px)'
      } else if (size === 'xl') {
        fontType = 'body/xl_700'
        height = 'var(--Sizing-10, 56px)'
        iconSize = 'var(--Sizing-5, 24px)'
        iconBoxSize = 'var(--Sizing-9, 48px)'
        fontPadding = '0px var(--Spacing-6, 24px)'
      }
      return {
        fontType,
        height,
        iconBoxSize,
        iconSize,
        fontPadding,
      }
    }, [size])

  const disabledColor = useMemo(() => getTheme('elevation', '8'), [getTheme])

  const Icons = (type: IconType) => {
    switch (type) {
      case 'check':
        return (
          <ConfirmNormal
            style={{ width: iconSize, height: iconSize }}
            fill={rest.disabled ? disabledColor : iconColor}
          />
        )
      case 'right':
        return (
          <Chevron_right
            style={{ width: iconSize, height: iconSize }}
            fill={rest.disabled ? disabledColor : iconColor}
          />
        )
      case 'upright':
        return (
          <Arrowfatline_upright
            style={{ width: iconSize, height: iconSize }}
            fill={rest.disabled ? disabledColor : iconColor}
          />
        )
      default:
        return null
    }
  }

  return (
    <BtnComp
      style={{
        height,
        width: fill ? '100%' : 'fit-content',
        justifyContent: fill ? 'space-between' : 'center',
        ...style,
      }}
      {...rest}
      onMouseOver={(): void => {
        setHover(true)
      }}
      onMouseOut={(): void => {
        setHover(false)
      }}
    >
      {typeof leftIcon === 'string' && IconList.includes(leftIcon) ? (
        <IconBoxComp
          style={{ width: iconBoxSize, height: iconBoxSize }}
          disabled={rest.disabled}
        >
          {Icons(leftIcon)}
        </IconBoxComp>
      ) : (
        (leftIcon ?? <div />)
      )}
      {['number', 'string'].includes(typeof children) ? (
        <KaText
          fontType={fontType}
          color={rest.disabled ? disabledColor : fontColor}
          style={{ padding: fontPadding }}
        >
          {children}
        </KaText>
      ) : (
        children
      )}
      {typeof rightIcon === 'string' && IconList.includes(rightIcon) ? (
        <IconBoxComp
          style={{ width: iconBoxSize, height: iconBoxSize }}
          disabled={rest.disabled}
        >
          {Icons(rightIcon)}
        </IconBoxComp>
      ) : (
        (rightIcon ?? <div />)
      )}
    </BtnComp>
  )
}
