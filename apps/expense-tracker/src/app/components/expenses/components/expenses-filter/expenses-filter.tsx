import { ChangeEvent } from 'react';
import styles from './expenses-filter.module.scss';

export interface ExpensesFilterProps {
  onChangeFilter: (date: string) => void;
  selected: string;
}

const ExpensesFilter = (props: ExpensesFilterProps) => {
  const { onChangeFilter, selected } = props;
  const dropdownChangeHandler = (event: ChangeEvent<HTMLSelectElement>) =>
    onChangeFilter(event.target.value);
  return (
    <div className={styles['expenses-filter']}>
      <div className={styles['expenses-filter__control']}>
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler} value={selected}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
