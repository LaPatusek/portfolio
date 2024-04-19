import { motion } from 'framer-motion';
import React from 'react';
import styles from './Card.module.css';

interface Props {
  className?: string | null;
  children: JSX.Element | JSX.Element[];
}

const Card: React.FC<Props> = ({ children, className }) => {
  return (
    <motion.div
      className={`${styles.card} ${className} relative`}
      initial={{ filter: 'blur(10px)', opacity: 0 }}
      animate={{ filter: 'blur(0px)', opacity: 1 }}
      exit={{ filter: 'blur(10px)', opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
