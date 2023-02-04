import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../UI/button/button';
import Card from '../UI/card/card';
import styles from './login.module.scss';

export interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

const Login = (props: LoginProps) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState<boolean>();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event: ChangeEvent) => {
    setEnteredEmail((event.target as HTMLInputElement).value);

    setFormIsValid(
      (event.target as HTMLInputElement).value.includes('@') &&
        enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event: ChangeEvent) => {
    setEnteredPassword((event.target as HTMLInputElement).value);

    setFormIsValid(
      (event.target as HTMLInputElement).value.trim().length > 6 &&
        enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={styles['login']}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles['control']} ${
            emailIsValid === false ? styles['invalid'] : ''
          }`}>
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles['control']} ${
            passwordIsValid === false ? styles['invalid'] : ''
          }`}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles['actions']}>
          <Button
            type='submit'
            className={styles['btn']}
            disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
