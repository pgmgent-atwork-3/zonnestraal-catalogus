import Image from 'next/image';
import React, { useState } from 'react';
import HeaderStyles from '../../_sass/layout/header.module.scss';
import Button from '../Buttons/Button';
import Burger from '../Menu/Burger';
import Nav from './Nav';
import Logo from '../Logo/Logo';

interface Props {
    
}

const Header = (props: Props) => {
  const [open, setOpen] = useState(false);

    return (
      <div className={HeaderStyles.header}>
          
          <Logo title='Zonnestraal catalogus'/>

          <Burger open={open} setOpen={setOpen}/>

          <Nav open={open}/>
      </div>
    )
}

export default Header;
