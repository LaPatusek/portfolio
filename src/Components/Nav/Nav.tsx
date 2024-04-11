import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
  return (
    <div className={`${styles.nav} grid`}>
      <NavLink to='/' className={'relative'}>
        Strona główna
      </NavLink>
      <NavLink to='/projekty' className={'relative'}>
        Projekty
      </NavLink>
      <NavLink to='/about' className={'relative'}>
        O mnie
      </NavLink>
      <NavLink to='/kontakt' className={'relative'}>
        Kontakt
      </NavLink>
    </div>
  );
};

export default Nav;
