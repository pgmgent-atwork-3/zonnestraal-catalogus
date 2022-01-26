import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

type BtnProps = { 
  title: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined
} 

const StyledSecondaryButton = styled.a`
  width: 70%;
  display: flex;
  justify-content: center;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  padding: ${({ theme }) => theme.paddings.extraSmall} ${({ theme }) => theme.paddings.small};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom:${({ theme }) => theme.margins.small};
  transition: all 0.3s ease;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.darkBlue};

    span {
      color: ${({ theme }) => theme.colors.white};
    }  
  }
`

const SecondaryButton: React.FC<BtnProps> = ({ title, onClick }) => {
  return (
    <StyledSecondaryButton onClick={onClick}>
        <span>{title}</span>
    </StyledSecondaryButton>
  )
}

export default SecondaryButton;
