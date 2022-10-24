import { render } from '@testing-library/react';

import ExpensesFilter from './expenses-filter';

describe('ExpensesFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExpensesFilter />);
    expect(baseElement).toBeTruthy();
  });
});
