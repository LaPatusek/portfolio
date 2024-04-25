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
        'Brałem udział w kursie zorganizowanym przez Meta, gdzie zdobyłem umiejętności poruszania się po wierszu poleceń oraz pracy z Git. Nauczyłem się, jak wykonywać podstawowe operacje w terminalu, a także jak korzystać z funkcji Git, takich jak tworzenie branchy, łączenie zmian czy rozwiązywanie konfliktów.',
    },
    {
      heading: 'React Basics',
      year: 2024,
      content:
        'Kurs zorganizowany przez Meta, w którym przypomniałem sobie podstawy programowania w React.',
    },
    {
      heading: 'Understanding TypeScript',
      year: 2024,
      content:
        'Kurs, w którym opanowałem TypeScript. Nauczyłem się podstawowych typów, pracy z generics oraz integracji TypeScript z React. Kurs organizuje Maximilian Schwarzmüller.',
    },
    {
      heading: 'CSS – The Complete Guide',
      year: 2023,
      content:
        'Ukończyłem kurs skupiający się na technikach układania stron internetowych przy użyciu Flexbox i Grid. Nauczyłem się również tworzenia bardziej efektywnego kodu CSS za pomocą SASS. Kurs prowadził Maximilian Schwarzmüller.',
    },
    {
      heading: 'React – The Complete Guide',
      year: 2022,
      content:
        'W trakcie kursu zgłębiłem praktyczne zastosowanie React Hooks, co pozwoliło mi na tworzenie dynamicznych komponentów. Poznałem także techniki zarządzania stanem aplikacji przy użyciu React Router oraz Redux. Kurs organizuje Maximilian Schwarzmüller.',
    },
    {
      heading: 'Projektowanie stron internetowych',
      year: 2022,
      content:
        'Szkolenie zorganizowane przez Zakład Usług Socjalnych i Edukacji w Przemyślu w wymiarze 36 godzin.',
    },
    {
      heading: 'Zespół Szkół Technicznych w Strzyżowie',
      year: 2022,
      content:
        'Specjalizacja: Technik Informatyk, \nPoziom wykształcenia: średnie',
    },
    {
      heading: 'Kwalifikacja zawodowa EE.09',
      year: 2022,
      content:
        'Programowanie, tworzenie i administrowanie stronami internetowymi i bazami danych wyodrębnionej w zawodzie Technik informatyk',
    },
    {
      heading: 'Kwalifikacja zawodowa EE.08',
      year: 2021,
      content:
        'Montaż i eksploatacja systemów komputerowych, urządzeń peryferyjnych i sieci wyodrębnionej w zawodzie Technik informatyk',
    },
  ];

  return (
    <Card>
      <div className={styles['about-title']}>
        <h1>Kilka słów o mnie</h1>
        <p>
          Mój główny cel to rozwój i praca jako Front-end Developer. Tworzenie
          aplikacji internetowych sprawia mi przyjemność i jestem w stanie
          poświęcać się temu każdego dnia. Od 2022 roku systematycznie uczę się
          i rozwijam w tym kierunku. Głównie tworzę w React, lecz z chęcią
          poznam inne języki programowania. Mam osiem miesięcy doświadczenia w
          pracy komercyjnej.
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
              Przez pół roku miałem okazję pracować na stażu w zgranym zespole.
              Podczas tego czasu zdobyłem cenne doświadczenie w pracy z
              technologiami takimi jak GraphQL oraz biblioteką axios, ucząc się,
              jak korzystać z tych narzędzi w projektach. Miałem również
              możliwość rozwijać umiejętności komunikacyjne, regularnie
              kontaktując się z klientami. Ta praca pozwoliła mi na zdobycie
              wiedzy nie tylko w zakresie technologii, ale również w komunikacji
              i pracy zespołowej.
            </p>
          </li>

          <li>
            <div className={`${styles.heading} flex`}>
              <h3>Front-end Developer / SELENBIT</h3>
              <span>
                <Clock variant='Bold' size={14} /> 2022
              </span>
            </div>
            <p>
              Dwumiesięczne praktyki, w trakcie których stawiałem swoje pierwsze
              kroki jako front-end developer. Poznałem podstawy pracy w zespole
              oraz praktyczne zastosowanie HTML, CSS i JavaScript w projektach.
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
              Moim hobby są samochody i wszystko, co z nimi związane. W wolnym
              czasie lubię majsterkować przy autach, uczestniczyć w dyskusjach
              na forach motoryzacyjnych, grać w gry motoryzacyjny oraz oglądać
              motorsport. Szczególnie interesuję się Formułą 1, Drift Masters
              European Championship oraz Formula Drift.
            </p>
          </div>
        </div>

        <div className={`${styles.hobby} grid`}>
          <img src={CarImage} alt='Screenshot from Youtube' />
          <div className={styles['hobby-text']}>
            <h5>Gry komputerowe</h5>
            <p>
              Wieczorami lubię zagrać w gry wszelakiego rodzaju. Gry
              singleplayer, które opowiadają piękne historie. Strategie, które
              rozwijają moje taktyczne myślenie. MMORPG, w których można spotkać
              ciekawych ludzi i poznać przyjaciół na lata. Moje ulubione tytuły
              to Red Dead Redemption 2, Horizon Zero Dawn, Path of Exile oraz
              Black Desert Online.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.cv} grid`}>
        <a href='/CV/CV202404.pdf' target='_blank' rel='noreferrer'>
          CV <img src={ArrowRight} alt='CV' />
        </a>
        <Link to='/kontakt'>
          kontakt <img src={ArrowRight} alt='Kontakt' />
        </Link>
        <a href='https://github.com/LaPatusek' target='_blank' rel='noreferrer'>
          github <img src={ArrowRight} alt='GitHub' />
        </a>
      </div>
    </Card>
  );
};

export default About;
