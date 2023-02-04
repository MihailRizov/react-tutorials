import { ChangeEvent, FormEvent, useRef, useState } from 'react';
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
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const ageInputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<ErrorModalProps | null>();
  const actionHandler = () => setError(null);

  const addUserHandler = (event: FormEvent): void => {
    event.preventDefault();
    const usernameInput = nameInputRef.current?.value.trim() as string;
    const userAgeInput = ageInputRef.current?.value.trim() as string;
    if (!usernameInput.length) {
      setError({
        title: 'Invalid username',
        message: 'Please type a valid username',
      });
      return;
    }

    if (+userAgeInput <= 0) {
      setError({ title: 'Invalid age', message: 'Please type a valid age' });
      return;
    }

    onAddUser({ username: usernameInput, age: +userAgeInput });
    (nameInputRef.current as HTMLInputElement).value = '';
    (ageInputRef.current as HTMLInputElement).value = '';
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
          <input id='username' type='text' ref={nameInputRef} />
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' ref={ageInputRef} />
          <Button type='submit'>Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
