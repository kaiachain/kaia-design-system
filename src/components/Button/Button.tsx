import styled from "styled-components";

interface ButtonProps {
  bgColor?: string;
  color?: string;
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.bgColor || "#007BFF"};
  color: ${(props) => props.color || "#fff"};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default Button;
