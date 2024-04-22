import { HambergerMenu } from 'iconsax-react';
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
  const today = new Date();
  const hours = today.toLocaleString('pl-PL', {
    hour: '2-digit',
    hour12: true,
    minute: '2-digit',
  });

  return (
    <Fragment>
      <div className={styles.nav}>
        <NavLink to='/'>Strona główna</NavLink>
        <NavLink to='/projekty'>Projekty</NavLink>
        <NavLink to='/about'>O mnie</NavLink>
        <NavLink to='/kontakt'>Kontakt</NavLink>
      </div>

      <div className={styles['navbar-800']}>
        <span> {hours} </span>
        <div className={styles['menu-button']}>
          {/* Menu */}
          <HambergerMenu size={29}/>
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
