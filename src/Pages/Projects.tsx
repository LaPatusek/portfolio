import React from 'react';
import propImg from '../Assets/dritf.jpg';
import Card from '../Components/UI/Card';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  return (
    <Card>
      <div className={styles['projects-title']}>
        <h1>Projekty</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          mi lectus, id fermentum mauris luctus eget. Aliquam tristique semper
          gravida.
        </h2>
      </div>
      <div className={`${styles.projects} grid`}>
        <div className={styles.box}>
          <img src={propImg} alt='' />
          <div className={styles['box-text']}>
            <h3>AGMI TRANSPORT</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className={styles.box}>
          <img src={propImg} alt='' />
          <div className={styles['box-text']}>
            <h3>City of Lights</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className={styles.box}>
          <img src={propImg} alt='' />
          <div className={styles['box-text']}>
            <h3>Strony na Wypasie</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className={styles.box}>
          <img src={propImg} alt='' />
          <div className={styles['box-text']}>
            <h3>Excel na Wypasie</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className={styles.box}>
          <img src={propImg} alt='' />
          <div className={styles['box-text']}>
            <h3>SELENBIT</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className={styles.box}>
          <img src={propImg} alt='' />
          <div className={styles['box-text']}>
            <h3>Portfolio</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className={styles.box}>
          <img src={propImg} alt='' />
          <div className={styles['box-text']}>
            <h3>Excel Rzeszów</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className={styles.box}>
          <img src={propImg} alt='' />
          <div className={styles['box-text']}>
            <h3>Zakład Fryzjerski</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Projects;
