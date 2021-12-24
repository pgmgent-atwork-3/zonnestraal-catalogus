import React from 'react';
import PopUpStyles from '../Pop-up/pop-up.module.scss';

interface PopProps {
  text: string
}

const popUp = ({ text }: PopProps) => {
  return (
    <div className={PopUpStyles.container}>
      <p>{ text }</p>
    </div>
  )
}

export default popUp;
