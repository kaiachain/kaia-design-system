import React, { ReactElement, useMemo, useState } from 'react'
import styled from '@emotion/styled'
import { KaText } from '../Text/Text'
import { useKaTheme } from '../../hooks'
import { KaFontType } from '../../styles'
import ChevronRight from '../../icons/ChevronRight.svg'
import ArrowBarUpRight from '../../icons/ArrowBarUpRight.svg'
import Check from '../../icons/Check.svg'

const StyledSimpleButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;

  &:disabled {
    cursor: not-allowed;
  }
`

const StyledSimpleIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

const IconList = ['check', 'right', 'upright'] as const
type IconType = (typeof IconList)[number]

const getSimpleIconSize = (size: string) => {
  if (size === 'sm') return '12px'
  if (size === 'md') return '14px'
  return '16px'
}

const getIconMargin = (size: string) => {
  if (size === 'sm') return '4px'
  if (size === 'md') return '6px'
  return '8px'
}

export interface KaSimpleButtonProps {
  leftIcon?: IconType | ReactElement
  rightIcon?: IconType | ReactElement
  type?: 'green' | 'gray' | 'w/b'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick?: () => void
  children: React.ReactNode
  style?: React.CSSProperties
}

export const KaSimpleButton = ({
  leftIcon,
  rightIcon,
  type = 'green',
  size = 'sm',
  children,
  style,
  disabled,
  ...rest
}: KaSimpleButtonProps): ReactElement => {
  const { getTheme } = useKaTheme()
  const [hover, setHover] = useState(false)

  const { fontColor, iconColor } = useMemo(() => {
    let fontColor
    let iconColor

    if (type === 'green') {
      if (hover) {
        fontColor = iconColor = getTheme('brand', '4')
      } else {
        iconColor = fontColor = getTheme('brand', '5')
      }
    } else if (type === 'gray') {
      if (hover) {
        fontColor = iconColor = getTheme('elevation', '2')
      } else {
        iconColor = fontColor = getTheme('elevation', '3')
      }
    } else if (type === 'w/b') {
      if (hover) {
        fontColor = iconColor = getTheme('gray', '0')
      } else {
        iconColor = fontColor = getTheme('gray', '1')
      }
    }

    return {
      fontColor,
      iconColor,
    }
  }, [type, getTheme, hover])

  const fontType: KaFontType = useMemo(() => {
    if (size === 'sm') return 'body/sm_700'
    if (size === 'md') return 'body/md_700'
    return 'body/lg_700'
  }, [size])

  const disabledColor = useMemo(() => getTheme('elevation', '6'), [getTheme])

  const renderIcon = (iconType: IconType) => {
    const iconProps = {
      style: {
        width: getSimpleIconSize(size),
        height: getSimpleIconSize(size),
      },
      fill: disabled ? disabledColor : iconColor,
    }

    switch (iconType) {
      case 'check':
        return <Check {...iconProps} />
      case 'right':
        return <ChevronRight {...iconProps} />
      case 'upright':
        return <ArrowBarUpRight {...iconProps} />
      default:
        return null
    }
  }

  return (
    <StyledSimpleButton
      style={style}
      {...rest}
      onMouseOver={(): void => {
        setHover(true)
      }}
      onMouseOut={(): void => {
        setHover(false)
      }}
    >
      {typeof leftIcon === 'string' && IconList.includes(leftIcon) ? (
        <StyledSimpleIconBox
          style={{
            width: getSimpleIconSize(size),
            height: getSimpleIconSize(size),
          }}
        >
          {renderIcon(leftIcon)}
        </StyledSimpleIconBox>
      ) : (
        (leftIcon ?? <div />)
      )}
      <KaText
        fontType={fontType}
        color={disabled ? disabledColor : fontColor}
        style={{
          textDecoration: 'underline',
          textDecorationColor: 'currentColor',
          padding: `0 ${getIconMargin(size)}`,
        }}
      >
        {children}
      </KaText>
      {typeof rightIcon === 'string' && IconList.includes(rightIcon) ? (
        <StyledSimpleIconBox
          style={{
            width: getSimpleIconSize(size),
            height: getSimpleIconSize(size),
          }}
        >
          {renderIcon(rightIcon)}
        </StyledSimpleIconBox>
      ) : (
        (rightIcon ?? <div />)
      )}
    </StyledSimpleButton>
  )
}
