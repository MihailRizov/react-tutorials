import Card from '../UI/card/card';
import { ExpenseItemProps } from '../expenses/components/expense-item/expense-item';
import styles from './expenses.module.scss';
import ExpensesFilter from './components/expenses-filter/expenses-filter';
import { useState } from 'react';
import ExpensesList from './components/expenses-list/expenses-list';

/* eslint-disable-next-line */
export interface ExpensesProps {
  items: Expenses[];
}

interface Expenses extends ExpenseItemProps {
  id: string;
}

export const Expenses = (props: ExpensesProps) => {
  const { items } = props;
  const [filteredYear, setFilteredYear] = useState('2022');
  const changeFilterHandler = (date: string) => setFilteredYear(date);
  const filteredItems = items.filter(
    (item: Expenses) => `${item.date.getFullYear()}` === filteredYear
  );

  return (
    <Card className={styles['expenses']}>
      <ExpensesFilter
        onChangeFilter={changeFilterHandler}
        selected={filteredYear}
      />
      <li>
        <ExpensesList items={filteredItems} />
      </li>
    </Card>
  );
};

export default Expenses;
