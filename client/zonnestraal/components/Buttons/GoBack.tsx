import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

type BtnProps = { 
  title: string;
} 

const StyledGoBack = styled.a`
  justify-content: center;
  margin-top:${({ theme }) => theme.margins.normal};
  margin-bottom:${({ theme }) => theme.margins.normal};
  transition: all 0.3s ease;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.red};
  }

  &:hover {
    span {
      text-decoration: underline;
    }
  }
`

const GoBack: React.FC<BtnProps> = ({ title }) => {
  return (
    <StyledGoBack>
      <Link href={'/bibliotheek'}> 
        <span>{title}</span>
      </Link>
    </StyledGoBack>
  )
}

export default GoBack;
