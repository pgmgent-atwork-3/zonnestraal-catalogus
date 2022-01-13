import React from 'react';
import styled from 'styled-components';

const StyledPopUpButton = styled.button`
  display: block;
  background: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  transition: all 0.3s ease;

  span {
    font-size: ${({ theme }) => theme.fontSizes.headline6}
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.darkBlue};
  }

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    margin-right:  ${({ theme }) => theme.margins.normal};
  }
`

type BtnProps = { 
  title: string;
  onClick(): void;
} 

const PopUpButton = ({ title, onClick }:BtnProps) => {
  return (
    <StyledPopUpButton onClick={onClick}>
      <span>{title}</span>
    </StyledPopUpButton>
  )
}

export default PopUpButton;
