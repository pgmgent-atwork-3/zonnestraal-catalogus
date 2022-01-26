import React from 'react';
import styled from 'styled-components';

type BtnProps = { 
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset" | undefined
} 

const StyledLoginButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primaryColor};
  padding: ${({ theme }) => theme.paddings.extraSmall} ${({ theme }) => theme.paddings.small};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom:${({ theme }) => theme.margins.small};
  transition: all 0.3s ease;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.yellow};
  }
`

const LoginButton: React.FC<BtnProps> = ({ title, onClick, type }) => {
  return (
    <StyledLoginButton type={type} onClick={onClick}>
      <span>{title}</span>
    </StyledLoginButton>
  )
}

export default LoginButton;
