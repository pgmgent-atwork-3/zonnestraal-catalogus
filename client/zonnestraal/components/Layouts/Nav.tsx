import React from 'react';
import Link from 'next/link';
import navStyles from '../../_sass/components/navigation.module.scss';

interface Props {
    
}

const Nav = (props: Props) => {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li>
                <Link href='/'>Logo</Link>
            </li>
            <li>
                <Link href='/bibliotheek'>Bibliotheek</Link>
            </li>
            <li>
                <Link href='/voertuigen'>Voertuigen</Link>
            </li>
            <li>
                <Link href='/zalen'>Zalen</Link>
            </li>
            <li>
                <Link href='/login'>Aanmelden</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav;
