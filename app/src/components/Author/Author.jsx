import React from 'react';
import s from './Author.module.sass';
import QRcode from '../../media/Qr.png';
import author from '../../media/Author.png';
import Picture from '../UI/Picture';
import Description from '../UI/Description';

export default function Author() {
  return (
    <div className={s.author}>
      <Picture img={author} />
      <div className={s.content}>
        <h2>About the Author</h2>
        <Description>
          We believe that bookstores are essential to a healthy culture. They’re
          where authors can connect with readers, where we discover new writers,
          where children get hooked on the thrill of reading that can last a
          lifetime.
        </Description>
        <div className={s.info}>
          <div>
            <p className={s.number}>02</p>
            <Description>Books Published</Description>
          </div>
          <div>
            <p className={s.number}>4.5</p>
            <Description>User Reviews</Description>
          </div>
          <div>
            <p className={s.number}>04</p>
            <Description>Best Seller Awards</Description>
          </div>
        </div>
        <div className={s.contacts}>
          <img src={QRcode} alt="QR" />
          <div className={s.contactsText}>
            <p className={s.name}>John Abraham , Ph.d</p>
            <Description color="#B4C7E7">
              Mail: johnabraham@gmail.com
            </Description>
            <Description color="#B4C7E7">Phone: (+2) 123 545 9000</Description>
          </div>
        </div>
      </div>
    </div>
  );
}
