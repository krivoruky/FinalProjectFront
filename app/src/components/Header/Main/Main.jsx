import React from 'react';
import s from './Holder.module.sass';
import imgMain from '../../../media/Header.png';
import Button from '../../UI/Button';
import Description from '../../UI/Description';
import Mark from '../../UI/Mark';

export default function Main() {
  return (
    <div className={s.main}>
      <div className={s.mainText}>
        <p className={s.wellcome}>Welcome to Pages!!!</p>
        <h1>Your Books From The Best Writer.</h1>
        <Description color="#B4C7E7">
          We believe that reading books are essential to a healthy culture.
          They’re where authors can connect with readers.
        </Description>
        <Button margin="40px 0">Order Today</Button>
        <div className={s.slogan}>
          <Mark text="250pages">Pages:</Mark>
          <Mark text="10 Hours">Length:</Mark>
          <Mark text="4.5/5 (305 ratings)">Rating:</Mark>
        </div>
      </div>
      <div className={s.mainImg}>
        <img src={imgMain} alt="imgMain" />
      </div>
    </div>
  );
}
