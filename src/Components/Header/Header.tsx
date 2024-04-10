import React from 'react';
import Nav from '../Nav/Nav';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const today = new Date();
  const hours = today.toLocaleString('pl-PL', {
    hour: '2-digit',
    hour12: true,
    minute: '2-digit',
  });
  const date = today.getDate();
  const month = today.toLocaleString('default', { month: 'long' });

  return (
    <div className={styles['header-wrap']}>
      <div className={styles.header}>
        <h1>Dawid Rusin</h1>
        <h2>Front-End Developer</h2>
        <h3>
          {hours} {date} {month}, 2002
        </h3>
      </div>
      <span>Witaj</span>

      <Nav />
    </div>
  );
};

export default Header;
