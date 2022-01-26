import React, { useState } from 'react';
import Burger from '../Menu/Burger';
import Nav from './Nav';
import Logo from '../Logo/Logo';
import styled from 'styled-components';

const StyledHeader = styled.div`
  padding: ${({ theme }) => theme.paddings.small};
  height: 5rem;
  background: ${({ theme }) => theme.colors.lightGrey};
  position: sticky;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid ${({ theme }) => theme.colors.yellow};
  z-index: 201;
  box-shadow: ${({ theme }) => theme.colors.grey} 0px 8px 24px;

  @media (min-width: ${({ theme }) => theme.width.desktop}) {
    position: sticky;
    height: 5rem;
    flex-direction: row;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.lightGrey}; 
    padding: ${({ theme }) => theme.paddings.medium} ${({ theme }) => theme.paddings.extraLarge};
  } 
`

interface Props {
    
}

const Header = (props: Props) => {
  const [open, setOpen] = useState(false);

    return (
      <StyledHeader>
          <Logo title='Zonnestraal catalogus'/>

          <Burger open={open} setOpen={setOpen}/>

          <Nav open={open}/>
      </StyledHeader>
    )
}

export default Header;
