import React from 'react';
import styled from 'styled-components';

type PopProps = {
  text: string;
}

const PopContainer = styled.div `
height: 1rem;
  display: flex;
  background: ${({ theme }) => theme.colors.yellow};
  margin-bottom:  ${({ theme }) => theme.margins.small};

  p {
    text-align: center;
  }

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    margin-bottom: 0;
  }
`

const popUp = ({ text }:PopProps) => {
  return (
    <PopContainer>
      <p>{ text }</p>
    </PopContainer>
  )
}

export default popUp;
