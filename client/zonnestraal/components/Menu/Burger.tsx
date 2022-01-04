import React from 'react';
import styled from 'styled-components';

interface BurgerProps {
  open: Boolean;
  setOpen: Function;
}

const StyledBurger = styled.div<{open: Boolean}>`
  position: ${( {open} ) => (open ? "fixed" : "absolute")};
  top: 1.5rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.20rem;
    background: ${({ theme }) => theme.colors.black};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      height: 0.20rem;
      transform: ${( {open} ) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      height: 0.20rem;
      opacity: ${( {open} ) => (open ? "0" : "1")};
      transform: ${( {open} ) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      height: 0.20rem;
      transform: ${( {open} ) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    display: none;
  }
`

const Burger = ({ open, setOpen }: BurgerProps) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;
