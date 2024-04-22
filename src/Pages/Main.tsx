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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
        mi lectus, id fermentum mauris luctus eget. Aliquam tristique semper
        gravida.
      </p>
    </motion.div>
  );
};

export default Header;
