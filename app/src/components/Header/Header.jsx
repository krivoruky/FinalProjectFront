import React from 'react';
import s from './Header.module.sass';
import Main from './Main/Main';
import Nav from './Nav';

export default function Header() {
  return (
    <div className={s.header}>
      <Nav />
      <Main />
    </div>
  );
}
