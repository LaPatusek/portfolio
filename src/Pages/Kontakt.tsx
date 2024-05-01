import emailjs from '@emailjs/browser';
import { Heart } from 'iconsax-react';
import React, { useRef, useState } from 'react';
import Card from '../Components/UI/Card';
import useInput from '../Components/hooks/useInput';
import styles from './Kontakt.module.css';

declare var process: {
  env: {
    REACT_APP_SMTP_ID: string;
    REACT_APP_TEMPLATE_ID: string;
    REACT_APP_PUBLIC_KEY: string;
  };
};

const Kontakt: React.FC = () => {
  const [formIsSent, setFormIsSent] = useState<boolean>(false);
  const formRef = useRef(null);

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

    emailjs
      .sendForm(
        process.env.REACT_APP_SMTP_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current!,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

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
          Poprzez formularz kontaktowy lub bezpośrednio na{' '}
          <a href='mailto:rusin.dawid18@gmail.com'>rusin.dawid18@gmail.com</a>
        </h2>
      </div>

      <form onSubmit={formHandler} className='grid' ref={formRef}>
        <input
          type='text'
          placeholder='Imię'
          name='user_name'
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
          name='user_topic'
          id='topic'
          className={topicHasError ? styles.error : ''}
          value={enteredTopic}
          onChange={topicChangeHandler}
          onBlur={topicBlurHandler}
          autoComplete='off'
        />
        <input
          type='email'
          placeholder='Adres email'
          name='user_email'
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
          name='user_message'
          id='message'
          className={messageHasError ? styles.error : ''}
          value={enteredMessage}
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
        />
        <button>Wyślij</button>
        {formIsSent && (
          <div className={`${styles['mess-after-sent']} grid`}>
            <Heart variant='Bold' size={28} />
            Dziękuje za kontakt
          </div>
        )}
      </form>
    </Card>
  );
};

export default Kontakt;
