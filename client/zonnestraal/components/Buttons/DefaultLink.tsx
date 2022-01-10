import React from 'react';
import styled from 'styled-components';

type BtnProps = { 
  title: string;
} 

const StyledDefaultLink = styled.a`
  justify-content: center;
  margin-top:${({ theme }) => theme.margins.normal};
  margin-bottom:${({ theme }) => theme.margins.normal};
  transition: all 0.3s ease;

  span {
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`

const DefaultLink: React.FC<BtnProps> = ({ title }) => {
  return (
    <StyledDefaultLink>
      <span>{title}</span>
    </StyledDefaultLink>
  )
}

export default DefaultLink;
