import React from 'react';
import { Link } from 'react-router-dom';
import Portfolio from '../Assets/PortfolioWeb.webp';
import Card from '../Components/UI/Card';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const Projekty = [
    {
      title: 'AGMI TRANSPORT',
      desc: 'Strona profesjonalnej firmy logistycznej',
      class: 'agmi',
      link: 'https://www.agmitransport.pl/',
    },
    {
      title: 'City of Lights',
      desc: 'Strona przeznaczona serwerowi GTA RP',
      class: 'col',
      link: 'https://devcol.vercel.app/',
    },
    {
      title: 'Strony na Wypasie',
      desc: 'Strona firmy, z którą współpracowałem. Zajmująca się tworzeniem stron internetowych',
      class: 'strony-wyp',
      link: 'https://www.stronynawypasie.pl/',
    },
    {
      title: 'Excel na Wypasie',
      desc: 'Kursy Excel Online',
      class: 'excel-wypas',
      link: 'https://www.excelnawypasie.pl/',
    },
    {
      title: 'SELENBIT',
      desc: 'Profesjonalne szkolenia na terenie Podkarpacia',
      class: 'selenbit',
      link: 'https://www.selenbit.pl/',
    },
    {
      title: 'Excel Rzeszów',
      desc: 'Szkolenia Excel na terenie Rzeszowa',
      class: 'excel-rze',
      link: 'https://www.excelrzeszow.pl/',
    },
    {
      title: 'Zakład Fryzjerski',
      desc: 'Projekt w trakcie produkcji',
      class: 'barber',
      link: 'https://barber-eta-bice.vercel.app/',
    },
  ];

  return (
    <Card>
      <div className={styles['projects-title']}>
        <h1>Projekty</h1>
        <h2>
          Najnowsze prace komercyjne, w których wykorzystuję swoje umiejętności
          i kreatywność w praktyce.
        </h2>
      </div>
      <div className={`${styles.projects} grid`}>
        {Projekty.map((project) => {
          const boxStyle = project.class + '-box';
          const imgStyle = project.class + '-image';

          return (
            <a
              href={project.link}
              className={`${styles[boxStyle]} ${styles.box}`}
              key={project.title}
            >
              <div className={`${styles[imgStyle]} ${styles['box-img']} `} />
              <div className={styles['box-text']}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </a>
          );
        })}

        <Link to='/' className={styles.box}>
          <img src={Portfolio} alt='Portfolio' />
          <div className={styles['box-text']}>
            <h3>Portfolio</h3>
            <p>Strona, na której obecnie jesteśmy</p>
          </div>
        </Link>
      </div>
    </Card>
  );
};

export default Projects;
