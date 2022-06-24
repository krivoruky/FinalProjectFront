import React from 'react';
import Logo from '../../UI/Logo';
import facebook from '../../../media/Img1.png';
import twitter from '../../../media/Img2.png';
import LinkedIn from '../../../media/Img3.png';
import Social from '../../UI/Social';
import s from './Nav.module.sass';
import Button from '../../UI/Button';
import NavButton from '../../UI/NavButton';

export default function Nav() {
  return (
    <div className={s.nav}>
      <div className={s.wrapperSocials}>
        <Logo />
        <div className={s.socials}>
          <Social>
            <img src={facebook} alt="facebook" />
          </Social>
          <Social>
            <img src={twitter} alt="twitter" />
          </Social>
          <Social>
            <img src={LinkedIn} alt="LinkedIn" />
          </Social>
        </div>
      </div>
      <div className={s.wrapMenu}>
        <div className={s.menu}>
          <NavButton>Home</NavButton>
          <NavButton>About</NavButton>
          <NavButton>Pages</NavButton>
          <NavButton>Contact Us</NavButton>
        </div>
        <Button>Order Today</Button>
      </div>
    </div>
  );
}
