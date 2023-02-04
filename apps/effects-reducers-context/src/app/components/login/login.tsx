import { ChangeEvent, FormEvent, useEffect, useReducer, useState } from 'react';
import Button from '../UI/button/button';
import Card from '../UI/card/card';
import styles from './login.module.scss';

export interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

enum ActionTypes {
  EMAIL_INPUT = 'EMAIL_INPUT',
  EMAIL_INPUT_BLUR = 'EMAIL_INPUT_BLUR',
  PASSWORD_INPUT = 'PASSWORD_INPUT',
  PASSWORD_INPUT_BLUR = 'PASSWORD_INPUT_BLUR',
  CHECK_FORM_VALIDITY = 'CHECK_FORM_VALIDITY',
}

interface FormState {
  email: InputState;
  password: InputState;
  isFormValid: boolean;
}

interface InputState {
  value: string;
  isValid: boolean | null;
}

interface ReducerAction {
  type: ActionTypes;
  payload?: Pick<InputState, 'value'>;
}

const initialFormState: FormState = {
  email: { value: '', isValid: null },
  password: { value: '', isValid: null },
  isFormValid: false,
};

const isValidEmail = (value: string): boolean => value.includes('@');
const isValidPassword = (value: string): boolean => value.trim().length > 6;

const formReducer = (state: FormState, action: ReducerAction): FormState => {
  const { type, payload } = action;
  if (type === ActionTypes.EMAIL_INPUT) {
    return {
      ...state,
      email: {
        value: payload?.value as string,
        isValid: isValidEmail(payload?.value as string),
      },
      // isFormValid:
      //   isValidEmail(payload?.value as string) &&
      //   isValidPassword(state.password.value),
    };
  }

  if (type === ActionTypes.EMAIL_INPUT_BLUR) {
    return {
      ...state,
      email: {
        ...state.email,
        isValid: isValidEmail(state.email.value),
      },
      // isFormValid:
      //   isValidEmail(state.email.value) &&
      //   isValidPassword(state.password.value),
    };
  }

  if (type === ActionTypes.PASSWORD_INPUT) {
    return {
      ...state,
      password: {
        value: payload?.value as string,
        isValid: isValidPassword(payload?.value as string),
      },
      // isFormValid:
      //   isValidEmail(state.email.value) &&
      //   isValidPassword(payload?.value as string),
    };
  }

  if (type === ActionTypes.PASSWORD_INPUT_BLUR) {
    return {
      ...state,
      password: {
        ...state.password,
        isValid: isValidPassword(state.password.value),
      },
      // isFormValid:
      //   isValidEmail(state.email.value) &&
      //   isValidPassword(state.password.value),
    };
  }

  if (type === ActionTypes.CHECK_FORM_VALIDITY) {
    return {
      ...state,
      isFormValid:
        isValidEmail(state.email.value) &&
        isValidPassword(state.password.value),
    };
  }

  return initialFormState;
};

const Login = (props: LoginProps) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState<boolean>();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState<boolean>();
  // const [formIsValid, setFormIsValid] = useState(false);

  const [formState, dispatchForm] = useReducer(formReducer, initialFormState);

  const {
    email: { isValid: isValidEmail },
    password: { isValid: isValidPassword },
  } = formState;
  useEffect(() => {
    const identifier = setTimeout(
      () => dispatchForm({ type: ActionTypes.CHECK_FORM_VALIDITY }),
      500
    );

    return () => clearInterval(identifier);
  }, [isValidEmail, isValidPassword]);

  const emailChangeHandler = (event: ChangeEvent) => {
    dispatchForm({
      type: ActionTypes.EMAIL_INPUT,
      payload: { value: (event.target as HTMLInputElement).value },
    });
    // setEnteredEmail((event.target as HTMLInputElement).value);
  };

  const passwordChangeHandler = (event: ChangeEvent) => {
    dispatchForm({
      type: ActionTypes.PASSWORD_INPUT,
      payload: { value: (event.target as HTMLInputElement).value },
    });

    // setFormIsValid(
    //   formState.email.isValid && formState.password.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    dispatchForm({
      type: ActionTypes.EMAIL_INPUT_BLUR,
    });

    // setEmailIsValid(formState.email.isValid);

    // setFormIsValid(
    //   formState.email.value.includes('@') &&
    //     formState.password.value.trim().length > 6
    // );
  };

  const validatePasswordHandler = () => {
    dispatchForm({
      type: ActionTypes.PASSWORD_INPUT_BLUR,
    });
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    props.onLogin(formState.email.value, formState.password.value);
  };

  return (
    <Card className={styles['login']}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles['control']} ${
            formState.email.isValid === false ? styles['invalid'] : ''
          }`}>
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={formState.email.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles['control']} ${
            formState.password.isValid === false ? styles['invalid'] : ''
          }`}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={formState.password.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles['actions']}>
          <Button
            type='submit'
            className={styles['btn']}
            disabled={!formState.isFormValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
