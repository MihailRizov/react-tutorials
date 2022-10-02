import { render } from '@testing-library/react';

import ExpenseDate from './expense-date';

describe('ExpenseDate', () => {
  const mockDate = {
    date: new Date(2020, 7, 14),
  };
  it('should render successfully', () => {
    const { baseElement } = render(<ExpenseDate {...mockDate} />);
    expect(baseElement).toBeTruthy();
  });
});
