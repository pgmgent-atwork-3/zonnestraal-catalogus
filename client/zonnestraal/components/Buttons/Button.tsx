import React from 'react';
import hamburgerStyles from '../../_sass/components/hamburger.module.scss';

type BtnProps = { 
  title: string;
} 

const Button: React.FC<BtnProps> = ({ title }) => {
  return (
    <div className={hamburgerStyles.hamburger}>
      <a className='hamburger'>
        {title}
      </a>
    </div>
  )
}

export default Button;
