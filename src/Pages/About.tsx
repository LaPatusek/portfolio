import { Clock } from 'iconsax-react';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRight from '../Assets/caret-forward-outline.svg';
import CarImage from '../Assets/dritf.jpg';
import styles from './About.module.css';

const About: React.FC = () => {
  const courses = [
    {
      heading: 'Lorem ipsum dolor sit amet1',
      year: 2022,
      content:
        'consectetur adipiscing elit. Nullam auctor mi lectus, id fermentum mauris luctus eget. Aliquam tristique semper gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor mi lectus',
    },
    {
      heading: 'Lorem ipsum dolor sit amet2',
      year: 2022,
      content:
        'consectetur adipiscing elit. Nullam auctor mi lectus, id fermentum mauris luctus eget. Aliquam tristique semper gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor mi lectus',
    },
    {
      heading: 'Lorem ipsum dolor sit amet3',
      year: 2022,
      content:
        'consectetur adipiscing elit. Nullam auctor mi lectus, id fermentum mauris luctus eget. Aliquam tristique semper gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor mi lectus',
    },
    {
      heading: 'Lorem ipsum dolor sit amet4',
      year: 2022,
      content:
        'consectetur adipiscing elit. Nullam auctor mi lectus, id fermentum mauris luctus eget. Aliquam tristique semper gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor mi lectus',
    },
    {
      heading: 'Lorem ipsum dolor sit amet5',
      year: 2022,
      content:
        'consectetur adipiscing elit. Nullam auctor mi lectus, id fermentum mauris luctus eget. Aliquam tristique semper gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor mi lectus',
    },
    {
      heading: 'Lorem ipsum dolor sit amet6',
      year: 2022,
      content:
        'consectetur adipiscing elit. Nullam auctor mi lectus, id fermentum mauris luctus eget. Aliquam tristique semper gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor mi lectus',
    },
    {
      heading: 'Lorem ipsum dolor sit amet7',
      year: 2022,
      content:
        'consectetur adipiscing elit. Nullam auctor mi lectus, id fermentum mauris luctus eget. Aliquam tristique semper gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor mi lectus',
    },
  ];

  return (
    <div className={styles.title}>
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
            <div className={styles.heading}>
              <h3>Lorem ipsum dolor sit amet</h3>
              <span>
                <Clock variant='Bold' size={14} /> 2023
              </span>
            </div>
            <p>
              consectetur adipiscing elit. Nullam auctor mi lectus, id fermentum
              mauris luctus eget. Aliquam tristique semper gravida. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nullam auctor mi
              lectus
            </p>
          </li>

          <li>
            <div className={styles.heading}>
              <h3>Lorem ipsum dolor sit amet</h3>
              <span>
                <Clock variant='Bold' size={14} /> 2022
              </span>
            </div>
            <p>
              consectetur adipiscing elit. Nullam auctor mi lectus, id fermentum
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
                <div className={styles.heading}>
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
        <div className={styles.hobby}>
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

        <div className={styles.hobby}>
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

      <div className={styles.cv}>
        <button>
          CV <img src={ArrowRight} alt='' />
        </button>
        <Link to='/kontakt'>
          kontakt <img src={ArrowRight} alt='' />
        </Link>
        <button>
          trzeci <img src={ArrowRight} alt='' />
        </button>
      </div>
    </div>
  );
};

export default About;
