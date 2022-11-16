import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../../UI/button/button';
import styles from './course-input.module.scss';

export interface CourseInputProps {
  onAddGoal: (enteredValue: string) => void;
}

const CourseInput = (props: CourseInputProps) => {
  const { onAddGoal } = props;
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.trim();

    if (inputValue) {
      setIsValid(true);
    }

    setEnteredValue(inputValue);
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (!enteredValue) {
      setIsValid(false);
      return;
    }

    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles['form-control']} ${
          !isValid && styles['invalid']
        }`}>
        <label>Course Goal</label>
        <input type='text' onChange={goalInputChangeHandler} />
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
