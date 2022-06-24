import React from 'react';
import Title from '../UI/Title';
import Partners from './Partners';
import s from './Сustomers.module.sass';

export default function Customers({ customers }) {
  return (
    <div className={s.customers}>
      <Title>Trusted By The Best</Title>
      <div className={s.parters}>
        {customers.map(partners => (
          <Partners key={partners.id} {...partners} />
        ))}
      </div>
    </div>
  );
}
