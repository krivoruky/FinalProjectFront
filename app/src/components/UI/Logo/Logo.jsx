import React from 'react';
import s from './Logo.module.sass';
import logo from '../../../media/logo.png';

export default function Logo() {
  return (
    <div className={s.logo}>
      <img src={logo} alt="logo" />
      <p>Pages</p>
    </div>
  );
}
