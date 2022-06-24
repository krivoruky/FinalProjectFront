import React from 'react';
import Description from '../../UI/Description';
import s from './CopyToday.module.sass';
import Copy from '../../media/CopyToday.png';

export default function CopyToday() {
  return (
    <div className={s.copy}>
      <div className={s.text}>
        <h2>Get Book Copy Today!</h2>
        <Description color="#B4C7E7">
          We believe that bookstores are essential to a healthy culture. They’re
          where authors can connect with readers.
        </Description>
      </div>
      <div className={s.img}>
        <img src={Copy} alt="img" />
      </div>
    </div>
  );
}
