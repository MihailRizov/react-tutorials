import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../../ui/button/button';
import Card from '../../ui/card/card';
import ErrorModal, { ErrorModalProps } from '../../ui/error-modal/error-modal';
import styles from './add-user.module.scss';

export interface AddUserProps {
  onAddUser: (user: User) => void;
}
export interface User {
  username: string;
  age: number;
  key?: number;
}

const AddUser = (props: AddUserProps) => {
  const { onAddUser } = props;
  const [error, setError] = useState<ErrorModalProps | null>();
  const actionHandler = () => setError(null);
  const [enteredUsername, setEnteredUsername] = useState('');
  const userNameChangeHandler = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setEnteredUsername(event.target.value.trim());
  };

  const [enteredAge, setEnteredAge] = useState(0);
  const userAgeChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setEnteredAge(+event.target.value.trim());
  };

  const addUserHandler = (event: FormEvent): void => {
    event.preventDefault();
    if (!enteredUsername.trim().length) {
      setError({
        title: 'Invalid username',
        message: 'Please type a valid username',
      });
      return;
    }

    if (enteredAge <= 0) {
      setError({ title: 'Invalid age', message: 'Please type a valid age' });
      return;
    }

    onAddUser({ username: enteredUsername, age: enteredAge });
    setEnteredUsername('');
    setEnteredAge(0);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onAction={actionHandler}
        />
      )}
      <Card className={styles['input']}>
        <form className={styles['']} onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={enteredUsername}
            onChange={userNameChangeHandler}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type='number'
            value={enteredAge || ''}
            onChange={userAgeChangeHandler}
          />
          <Button type='submit'>Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
