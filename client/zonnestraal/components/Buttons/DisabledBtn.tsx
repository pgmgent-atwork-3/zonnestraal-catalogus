import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

type BtnProps = { 
  title: string;
} 

const StyledDisabledButton = styled.a`
  width: 70%;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.red};
  padding: ${({ theme }) => theme.paddings.extraSmall} ${({ theme }) => theme.paddings.small};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom:${({ theme }) => theme.margins.small};
  transition: all 0.3s ease;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.white};
  }
`

const DisabledButton: React.FC<BtnProps> = ({ title }) => {

  return (     
    <StyledDisabledButton type="submit">
      <Link href={"login"}>
        <span>{title}</span>
      </Link>
    </StyledDisabledButton>
  )
}

export default DisabledButton;
