import React from 'react';
import Portfolio from '../Assets/PortfolioWeb.webp';
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
          <img
            src={
              'https://api.apify.com/v2/key-value-stores/GPZF9d2xRgnlMMttJ/records/www.agmitransport.pl-scroll_lossy-comp'
            }
            alt=''
          />
          <div className={styles['box-text']}>
            <h3>AGMI TRANSPORT</h3>
            <p>Strona profesjonalnej firmy logistycznej</p>
          </div>
        </div>

        <div className={styles.box}>
          <img
            src={
              'https://api.apify.com/v2/key-value-stores/ecvWqYJqvoilY9H5L/records/devcol.vercel.app-scroll_lossy-comp'
            }
            alt='City of Lights'
          />
          <div className={styles['box-text']}>
            <h3>City of Lights</h3>
            <p>Strona przeznaczona serwerowi GTA RP</p>
          </div>
        </div>

        <div className={styles.box}>
          <img
            src={
              '	https://api.apify.com/v2/key-value-stores/eIzQy5YZs8MvzSfAE/records/stronynawypasie.pl-scroll_lossy-comp'
            }
            alt='Strony na Wypasie'
          />
          <div className={styles['box-text']}>
            <h3>Strony na Wypasie</h3>
            <p>
              Strona firmy, z którą współpracowałem. Zajmująca się tworzeniem
              stron internetowych
            </p>
          </div>
        </div>

        <div className={styles.box}>
          <img
            src={
              'https://api.apify.com/v2/key-value-stores/G0KLIkLGv7A73VKeR/records/www.excelnawypasie.pl-scroll_lossy-comp'
            }
            alt='Excel na Wypasie'
          />
          <div className={styles['box-text']}>
            <h3>Excel na Wypasie</h3>
            <p>Kursy Excel Online</p>
          </div>
        </div>

        <div className={styles.box}>
          <img
            src={
              'https://api.apify.com/v2/key-value-stores/1NGmhcail7Q89XQ61/records/selenbit.pl-scroll_lossy-comp'
            }
            alt='SelenBit'
          />
          <div className={styles['box-text']}>
            <h3>SELENBIT</h3>
            <p>Profesjonalne szkolenia na terenie Podkarpacia</p>
          </div>
        </div>

        <div className={styles.box}>
          <img src={Portfolio} alt='Portfolio' />
          <div className={styles['box-text']}>
            <h3>Portfolio</h3>
            <p>Strona, na której obecnie jesteśmy</p>
          </div>
        </div>

        <div className={styles.box}>
          <img
            src={
              'https://api.apify.com/v2/key-value-stores/DVwBtoJJShIGkeqkj/records/www.excelrzeszow.pl-scroll_lossy-comp'
            }
            alt='Excel Rzeszów'
          />
          <div className={styles['box-text']}>
            <h3>Excel Rzeszów</h3>
            <p>Szkolenia Excel na terenie Rzeszowa</p>
          </div>
        </div>

        <div className={styles.box}>
          <img
            src={
              'https://api.apify.com/v2/key-value-stores/qkR4Eg3GxSa1dheyk/records/barber-eta-bice.vercel.app-scroll_lossy-comp'
            }
            alt='Zakład Fryzjerski'
          />
          <div className={styles['box-text']}>
            <h3>Zakład Fryzjerski</h3>
            <p>Projekt w trakcie produkcji</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Projects;
