import React, { useState } from 'react';
import HeaderStyles from '../../_sass/layout/header.module.scss';
import Button from '../Buttons/Button';
import Nav from './Nav';

interface Props {
    
}

const Header = (props: Props) => {
  const [open, setOpen] = useState(false);

    return (
      <div className={HeaderStyles.header}>
          <a href='/'>
            <span>Zonnestraal vzw</span>
          </a>

          <Button title='close'/>

          <Nav />
      </div>
    )
}

export default Header;
