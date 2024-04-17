import { Clock } from 'iconsax-react';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRight from '../Assets/caret-forward-outline.svg';
import CarImage from '../Assets/dritf.jpg';
import Card from '../Components/UI/Card';
import styles from './About.module.css';

const About: React.FC = () => {
  const courses = [
    {
      heading: 'Version Control',
      year: 2024,
      content:
        'consectetur adipiscing elit. Nullam auctor mi lectus, id fermentum mauris luctus eget. Aliquam tristique semper gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor mi lectus',
    },
    {
      heading: 'Understanding TypeScript',
      year: 2024,
      content:
        'consectetur adipiscing elit. Nullam auctor mi lectus, id fermentum mauris luctus eget. Aliquam tristique semper gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor mi lectus',
    },
    {
      heading: 'CSS – The Complete Guide (incl. Flexbox, Grid & SASS)',
      year: 2023,
      content:
        'consectetur adipiscing elit. Nullam auctor mi lectus, id fermentum mauris luctus eget. Aliquam tristique semper gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor mi lectus',
    },
    {
      heading: 'React – The Complete Guide (incl. Hooks, React Router, Redux)',
      year: 2022,
      content:
        'consectetur adipiscing elit. Nullam auctor mi lectus, id fermentum mauris luctus eget. Aliquam tristique semper gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor mi lectus',
    },
    {
      heading: 'Projektowanie stron internetowych',
      year: 2022,
      content:
        'consectetur adipiscing elit. Nullam auctor mi lectus, id fermentum mauris luctus eget. Aliquam tristique semper gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor mi lectus',
    },
    {
      heading: 'Zespół Szkół Technicznych w Strzyżowie',
      year: 2022,
      content:
        'Specjalizacja: Technik Informatyk, \nPoziom wykształcenia: średnie',
    },
    {
      heading: 'Kwalifikacja zawodowa: EE.09',
      year: 2022,
      content:
        'Programowanie, tworzenie i administrowanie stronami internetowymi i bazami danych',
    },
    {
      heading: 'Kwalifikacja zawodowa: EE.08',
      year: 2021,
      content:
        'Montaż i eksploatacja systemów komputerowych, urządzeń peryferyjnych i sieci',
    },
  ];

  return (
    <Card>
      <div className={styles['about-title']}>
        <h1>Kilka słów o mnie</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          mi lectus, id fermentum mauris luctus eget. Aliquam tristique semper
          gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam auctor mi lectus, id fermentum mauris luctus eget. Aliquam
          tristique semper gravida.
        </p>
      </div>

      <div className={styles['section-wrap']}>
        <h2>Doświadczenie zawodowe</h2>
        <ol>
          <li>
            <div className={`${styles.heading} flex`}>
              <h3>React Developer / Strony na Wypasie</h3>
              <span>
                <Clock variant='Bold' size={14} /> 2023
              </span>
            </div>
            <p>
              Pół roczny miesięczny staż
              consectetur adipiscing elit. Nullam auctor mi lectus, id fermentum
              mauris luctus eget. Aliquam tristique semper gravida. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nullam auctor mi
              lectus
            </p>
          </li>

          <li>
            <div className={`${styles.heading} flex`}>
              <h3>Stażysta / SELENBIT</h3>
              <span>
                <Clock variant='Bold' size={14} /> 2022
              </span>
            </div>
            <p>
              2 miesięczne praktyki consectetur adipiscing elit. Nullam auctor mi lectus, id fermentum
              mauris luctus eget. Aliquam tristique semper gravida. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nullam auctor mi
              lectus
            </p>
          </li>
        </ol>
      </div>

      <div className={styles['section-wrap']}>
        <h2>Wykształcenie</h2>
        <ol>
          {courses.map((course) => {
            return (
              <li key={course.heading}>
                <div className={`${styles.heading} flex`}>
                  <h3>{course.heading}</h3>
                  <span>
                    <Clock variant='Bold' size={14} /> {course.year}
                  </span>
                </div>
                <p>{course.content}</p>
              </li>
            );
          })}
        </ol>
      </div>

      <div className={styles.hobbies}>
        <h4>Zainteresowania</h4>
        <div className={`${styles.hobby} grid`}>
          <img src={CarImage} alt='Screenshot from Youtube' />
          <div className={styles['hobby-text']}>
            <h5>Motoryzacja</h5>
            <p>
              consectetur adipiscing elit. Nullam auctor mi lectus, id fermentum
              mauris luctus eget. Aliquam tristique semper gravida. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nullam auctor mi
              lectus
            </p>
          </div>
        </div>

        <div className={`${styles.hobby} grid`}>
          <img src={CarImage} alt='Screenshot from Youtube' />
          <div className={styles['hobby-text']}>
            <h5>Gry komputerowe</h5>
            <p>
              consectetur adipiscing elit. Nullam auctor mi lectus, id fermentum
              mauris luctus eget. Aliquam tristique semper gravida. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nullam auctor mi
              lectus
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.cv} grid`}>
        <a href='cv'>
          CV <img src={ArrowRight} alt='CV' />
        </a>
        <Link to='/kontakt'>
          kontakt <img src={ArrowRight} alt='Kontakt' />
        </Link>
        <a href='https://github.com/LaPatusek'>
          github <img src={ArrowRight} alt='GitHub' />
        </a>
      </div>
    </Card>
  );
};

export default About;
