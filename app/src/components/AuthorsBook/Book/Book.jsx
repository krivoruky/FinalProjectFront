import React from 'react';
import AtomicOne from '../../../media/AtomicOne.png';
import s from './Book.module.sass';
import Description from '../../UI/Description';
import Mark from '../../UI/Mark';

export default function Book({ name, price, comment, typeBook, picture }) {
  return (
    <div className={s.book}>
      <div>
        <img src={AtomicOne} alt={picture} />
      </div>
      <div className={s.content}>
        <h3>{name}</h3>
        <p className={s.price}>{price}</p>
        <Description>{comment}</Description>
        <Mark color="#1B3764">{typeBook}</Mark>
      </div>
    </div>
  );
}
