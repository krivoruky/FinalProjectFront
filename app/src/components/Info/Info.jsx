import React from 'react';
import Logo from '../UI/Logo';
import Social from '../UI/Social';
import s from './Info.module.sass';
import FacebookF from '../../media/Img4.png';
import TwitterF from '../../media/Img5.png';
import LinkedInF from '../../media/Img6.png';
import MarkFooter from '../UI/MarkFooter';

export default function Info() {
  return (
    <div className={s.info}>
      <div>
        <Logo />
        <div className={s.socials}>
          <Social backgroundColor="transparent" outline="1px solid #FFCA42">
            <img src={FacebookF} alt="vector4" />
          </Social>
          <Social backgroundColor="transparent" outline="1px solid #FFCA42">
            <img src={TwitterF} alt="vector6" />
          </Social>
          <Social backgroundColor="transparent" outline="1px solid #FFCA42">
            <img src={LinkedInF} alt="vector6" />
          </Social>
        </div>
      </div>
      <div className={s.explore}>
        <h5>Explore</h5>
        <MarkFooter>Home</MarkFooter>
        <MarkFooter>About</MarkFooter>
        <MarkFooter>Articles</MarkFooter>
        <MarkFooter>Our Store</MarkFooter>
        <MarkFooter>Contact Us</MarkFooter>
      </div>
      <div className={s.utility}>
        <h5>Utility Pages</h5>
        <MarkFooter>Style Guide</MarkFooter>
        <MarkFooter>404 Not Found</MarkFooter>
        <MarkFooter>Password Protected</MarkFooter>
        <MarkFooter>Licenses</MarkFooter>
        <MarkFooter>Changelog</MarkFooter>
      </div>
      <div>
        <h5>Keep in Touch</h5>
        <div className={s.contact}>
          <h6>Address :</h6>
          <div>
            <p>24A Kingston St, Los Vegas</p>
            <p>NC 28202, USA.</p>
          </div>
          <h6>Mail :</h6>
          <p>support@pages.com</p>
          <h6>Phone :</h6>
          <p>(+22) 123 - 4567 - 900</p>
        </div>
      </div>
    </div>
  );
}
