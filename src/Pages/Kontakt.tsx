import { Heart } from 'iconsax-react';
import React, { useState } from 'react';
import Card from '../Components/UI/Card';
import useInput from '../Components/hooks/useInput';
import styles from './Kontakt.module.css';

const Kontakt: React.FC = () => {
  const [formIsSent, setFormIsSent] = useState<boolean>(false);

  const {
    value: enteredName,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    hasError: nameHasError,
    reset: nameReset,
  } = useInput({
    validateValue: (value: string) => value.trim() !== '',
  });

  const {
    value: enteredTopic,
    isValid: topicIsValid,
    valueChangeHandler: topicChangeHandler,
    inputBlurHandler: topicBlurHandler,
    hasError: topicHasError,
    reset: topicReset,
  } = useInput({
    validateValue: (value: string) => value.trim() !== '',
  });

  const {
    value: enteredMail,
    isValid: mailIsValid,
    valueChangeHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
    hasError: mailHasError,
    reset: mailReset,
  } = useInput({
    validateValue: (value: string) => value.trim().includes('@'),
  });

  const {
    value: enteredMessage,
    isValid: messageIsValid,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    hasError: messageHasError,
    reset: messageReset,
  } = useInput({
    validateValue: (value: string) => value.trim() !== '',
  });

  let formIsValid = false;

  if (nameIsValid && topicIsValid && mailIsValid && messageIsValid) {
    formIsValid = true;
  }

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    setFormIsSent(true);
    nameReset();
    topicReset();
    mailReset();
    messageReset();
  };

  return (
    <Card className={styles.kontakt}>
      <div className={styles['kontakt-title']}>
        <h1>Skontaktuj się ze mną</h1>
        <h2>
          Poprzez formularz kontaktowy lub <br /> bezpośrednio na{' '}
          <span>rusin.dawid18@gmail.com</span>
        </h2>
      </div>

      <form onSubmit={formHandler} className='grid'>
        <input
          type='text'
          placeholder='Imię'
          id='name'
          className={nameHasError ? styles.error : ''}
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          autoComplete='name'
        />
        <input
          type='text'
          placeholder='Temat'
          id='company'
          className={topicHasError ? styles.error : ''}
          value={enteredTopic}
          onChange={topicChangeHandler}
          onBlur={topicBlurHandler}
          autoComplete='off'
        />
        <input
          type='email'
          placeholder='Adres email'
          id='email'
          className={mailHasError ? styles.error : ''}
          value={enteredMail}
          onChange={mailChangeHandler}
          onBlur={mailBlurHandler}
          autoComplete='email'
        />
        <textarea
          placeholder='Wiadomość...'
          rows={6}
          id='message'
          className={messageHasError ? styles.error : ''}
          value={enteredMessage}
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
        />
        <button>Wyślij</button>
        {formIsSent && (
          <div className={`${styles['mess-after-sent']} grid`}>
              <Heart variant='Bold' size={28}/>
            Dziękuje za kontakt</div>
        )}
      </form>
    </Card>
  );
};

export default Kontakt;
