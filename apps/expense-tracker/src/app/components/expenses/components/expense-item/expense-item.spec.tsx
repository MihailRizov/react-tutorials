import { render } from '@testing-library/react';

import ExpenseItem from './expense-item';

describe('ExpenseItem', () => {
  const mockExpenseItem = {
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  };

  it('should render successfully', () => {
    const { baseElement } = render(<ExpenseItem {...mockExpenseItem} />);
    expect(baseElement).toBeTruthy();
  });
});
