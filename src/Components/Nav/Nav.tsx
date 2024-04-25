import { HambergerMenu } from 'iconsax-react';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
  const [menuState, setMenuState] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  const hours = today.toLocaleString('pl-PL', {
    hour: '2-digit',
    hour12: true,
    minute: '2-digit',
  });

  const menuHandler = () => {
    if (menuState) {
      const menu = menuRef.current!;
      menu.classList.remove(styles.active);
      setTimeout(() => {
        setMenuState(false);
      }, 450);
    } else setMenuState(true);
  };

  useEffect(() => {
    if (menuState) {
      document.body.style.overflowY = 'hidden';
    }
    if (!menuState) {
      document.body.style.overflowY = 'scroll';
    }

    const menu = menuRef.current!;
    if (menu) {
      if (menuState) {
        setTimeout(() => {
          menu.classList.add(styles.active);
        }, 10);
      }
    }
  }, [menuState]);

  return (
    <Fragment>
      <div className={styles.nav}>
        <ol>
          <li>
            <NavLink to='/'>Strona główna</NavLink>
          </li>
          <li>
            <NavLink to='/projekty'>Projekty</NavLink>
          </li>
          <li>
            <NavLink to='/about'>O mnie</NavLink>
          </li>
          <li>
            <NavLink to='/kontakt'>Kontakt</NavLink>
          </li>
        </ol>
      </div>

      <div className={styles['navbar-800']}>
        <span> {hours} </span>
        <div className={styles['menu-button']}>
          <HambergerMenu size={29} onClick={menuHandler} />
        </div>

        {menuState && (
          <div className={styles['nav-800']} ref={menuRef}>
            <ol>
              <li>
                <NavLink to='/' onClick={menuHandler}>
                  Strona główna
                </NavLink>
              </li>
              <li>
                <NavLink to='/projekty' onClick={menuHandler}>
                  Projekty
                </NavLink>
              </li>
              <li>
                <NavLink to='/about' onClick={menuHandler}>
                  O mnie
                </NavLink>
              </li>
              <li>
                <NavLink to='/kontakt' onClick={menuHandler}>
                  Kontakt
                </NavLink>
              </li>
            </ol>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Nav;
