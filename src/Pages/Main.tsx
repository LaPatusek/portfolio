import { motion } from 'framer-motion';
import React from 'react';
import styles from './Main.module.css';

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
    <motion.div
      className={`${styles['header-wrap']} grid`}
      initial={{ filter: 'blur(10px)', opacity: 0 }}
      animate={{ filter: 'blur(0px)', opacity: 1 }}
      exit={{ filter: 'blur(10px)', opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className={styles.header}>
        <h1>Dawid Rusin</h1>
        <h2>Front-End Developer</h2>
        <h3>
          {hours} {date} {month}, 2002
        </h3>
      </div>
      <p>
        Jestem 22 letnim front-end developerem, specjalizuję się w React. Moim
        głównym celem jest rozwój <br /> i poszerzanie wiedzy.
        <br />
        <span>
          Aktualnie poszukuje pracy lub stażu jako front-end developer.
        </span>
      </p>
    </motion.div>
  );
};

export default Header;
