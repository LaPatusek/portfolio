import React from 'react';
import propImg from '../Assets/dritf.jpg';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles['projects-title']}>
        <h1>Projects</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          mi lectus, id fermentum mauris luctus eget. Aliquam tristique semper
          gravida.
        </h2>
      </div>
      <div className={styles.projects}>
        <div className={styles.box}>
          <img src={propImg} alt='' />
          <div className={styles['box-text']}>
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className={styles.box}>
          <img src={propImg} alt='' />
          <div className={styles['box-text']}>
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className={styles.box}>
          <img src={propImg} alt='' />
          <div className={styles['box-text']}>
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className={styles.box}>
          <img src={propImg} alt='' />
          <div className={styles['box-text']}>
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
