import React from 'react';
import styled from 'styled-components';

type PopProps = {
  text: string;
}

const popContainer = styled.div `
  background: ${({ theme }) => theme.colors.yellow};
  padding:  ${({ theme }) => theme.margins.normal};

  p {
    text-align: center;
  }
`

const popUp = ({ text }:PopProps) => {
  return (
    <div>
      <p>{ text }</p>
    </div>
  )
}

export default popUp;
