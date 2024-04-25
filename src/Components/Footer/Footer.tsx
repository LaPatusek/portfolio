import { Copyright } from 'iconsax-react';
import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <div className={`${styles.copyright} relative`}>
      <p>
        <Copyright size={16}/>DR
      </p>
    </div>
  );
};

export default Footer;
