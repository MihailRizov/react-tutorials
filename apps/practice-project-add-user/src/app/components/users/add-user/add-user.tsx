import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../../ui/button/button';
import Card from '../../ui/card/card';
import styles from './add-user.module.scss';

/* eslint-disable-next-line */
export interface AddUserProps {}

const AddUser = (props: AddUserProps) => {
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
    if (!enteredUsername.trim().length || enteredAge <= 0) {
      return;
    }

    setEnteredUsername('');
    setEnteredAge(0);
  };

  return (
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
  );
};

export default AddUser;
