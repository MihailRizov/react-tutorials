import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './expense-form.module.scss';

/* eslint-disable-next-line */
export interface ExpenseFormProps {}

const ExpenseForm = (props: ExpenseFormProps) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: 0,
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value.trim());
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value.trim(),
    // });
    // setUserInput((prevState) => ({
    //   ...prevState,
    //   enteredTitle: event.target.value.trim(),
    // }));
  };

  const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(+event.target.value);
    // setUserInput((prevState) => ({
    //   ...prevState,
    //   enteredTitle: event.target.value.trim(),
    // }));
  };

  const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => ({
    //   ...prevState,
    //   enteredTitle: event.target.value.trim(),
    // }));
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles['new-expense__controls']}>
        <div className={styles['new-expense__control']}>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className={styles['new-expense__control']}>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className={styles['new-expense__control']}>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2025-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={styles['new-expense__actions']}>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
