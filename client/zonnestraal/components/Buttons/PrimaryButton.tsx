import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

type BtnProps = { 
  title: string;
  onClick?: () => any;
} 

const StyledPrimaryButton = styled.button`
  width: 70%;
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

const PrimaryButton: React.FC<BtnProps> = ({ title, onClick }) => {

  return (     
    <StyledPrimaryButton type="submit" onClick={onClick}>
        <span>{title}</span>
    </StyledPrimaryButton>
  )
}

export default PrimaryButton;
