import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
  return (
    <div className={`${styles.nav} grid`}>
      <NavLink to='/'>Strona główna</NavLink>
      <NavLink to='/projekty'>Projekty</NavLink>
      <NavLink to='/about'>O mnie</NavLink>
      <NavLink to='/kontakt'>Kontakt</NavLink>
    </div>
  );
};

export default Nav;
