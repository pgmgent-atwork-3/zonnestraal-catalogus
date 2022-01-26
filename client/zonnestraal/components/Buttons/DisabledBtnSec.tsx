import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

type BtnProps = { 
  title: string;
} 

const StyledDisabledButtonSec = styled.a`
  width: 70%;
  display: flex;
  justify-content: center;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.red};
  padding: ${({ theme }) => theme.paddings.extraSmall} ${({ theme }) => theme.paddings.small};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom:${({ theme }) => theme.margins.small};
  transition: all 0.3s ease;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.red};
  }
`

const DisabledButtonSec: React.FC<BtnProps> = ({ title }) => {

  return (     
    <StyledDisabledButtonSec type="submit">
      <Link href={"login"}>
        <span>{title}</span>
      </Link>
    </StyledDisabledButtonSec>
  )
}

export default DisabledButtonSec;
