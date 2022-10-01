import { render } from '@testing-library/react';

import Expenses from './expenses';

describe('Expenses', () => {
  const mockExpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
  ];
  it('should render successfully', () => {
    const { baseElement } = render(<Expenses expenses={mockExpenses} />);
    expect(baseElement).toBeTruthy();
  });
});
