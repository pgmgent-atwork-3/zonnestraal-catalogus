import React from 'react';
import styled from 'styled-components';

type BtnProps = { 
  title: string;
} 

const StyledDefaultLink = styled.a`
  justify-content: center;
  margin-top:${({ theme }) => theme.margins.small};
  margin-bottom:${({ theme }) => theme.margins.small};
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
