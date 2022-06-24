import React from 'react';
import Description from '../../UI/Description';
import s from './Partners.module.sass';
import Partner from '../../../media/Partner.png';

export default function Partners({ name, comment }) {
  return (
    <div className={s.partners}>
      <img src={Partner} alt="Partners" />
      <h6>{name}</h6>
      <Description>{comment}</Description>
    </div>
  );
}
