import React from 'react';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
  return (
    <div className={styles.nav}>
      <a href='asdasd'>Strona główna</a>
      <a href='asdasd'>O mnie</a>
      <a href='asdasd'>Projekty</a>
      <a href='asdasd'>Kontakt</a>
    </div>
  );
};

export default Nav;
