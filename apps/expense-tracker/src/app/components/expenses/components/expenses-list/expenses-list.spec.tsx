import { render } from '@testing-library/react';
import { Expense } from '../../../new-expense/new-expense';

import ExpensesList from './expenses-list';

describe('ExpensesList', () => {
  it('should render successfully', () => {
    const mockExpenses: Expense[] = [
      {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
      },
    ];

    const { baseElement } = render(<ExpensesList items={mockExpenses} />);
    expect(baseElement).toBeTruthy();
  });
});
