import React from 'react';
import s from './Logo.module.sass';
import LogoNav from '../../../media/LogoNav.png';

export default function Logo() {
  return (
    <div className={s.logo}>
      <img src={LogoNav} alt="logo" />
      <p>Pages</p>
    </div>
  );
}
