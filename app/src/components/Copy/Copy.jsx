import React from 'react';

import s from './Copy.module.sass';
import CopyImg from '../../media/CopyToday.png';
import Description from '../UI/Description';

export default function Copy() {
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
        <img src={CopyImg} alt="CopyToday" />
      </div>
    </div>
  );
}
