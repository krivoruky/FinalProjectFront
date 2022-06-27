import React from 'react';
import Description from '../../UI/Description';
import s from './Partners.module.sass';

export default function Partners({ name, comment, logo }) {
  return (
    <div className={s.partners}>
      <img src={`../media/${logo}`} alt={logo} />
      <h6>{name}</h6>
      <Description>{comment}</Description>
    </div>
  );
}
