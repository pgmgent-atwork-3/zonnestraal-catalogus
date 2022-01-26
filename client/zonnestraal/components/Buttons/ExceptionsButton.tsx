import React from 'react';
import styled from 'styled-components';

type BtnProps = { 
  title: string;
} 

const StyledExceptionsButton = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.yellow};
  padding: ${({ theme }) => theme.paddings.extraSmall} ${({ theme }) => theme.paddings.small};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: all 0.3s ease;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.black};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.yellow};
  }
`

const ExceptionsButton: React.FC<BtnProps> = ({ title }) => {
    
  return (
    <StyledExceptionsButton type="submit">
        <span>{title}</span>
    </StyledExceptionsButton>
  )
}

export default ExceptionsButton;
