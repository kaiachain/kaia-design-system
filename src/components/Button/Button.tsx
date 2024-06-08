import React from 'react'
import styled from 'styled-components'
import { themeFunc } from '../../styles'

const StyledButton = styled.button`
  background-color: ${themeFunc('gray', '0')};
  color: ${(props) => props.theme.gray_4};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: ${themeFunc('gray', '1')};
  }
`

interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button
