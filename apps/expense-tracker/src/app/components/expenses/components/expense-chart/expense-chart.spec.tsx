import { render } from '@testing-library/react';

import ExpenseChart from './expense-chart';

describe('ExpenseChart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExpenseChart />);
    expect(baseElement).toBeTruthy();
  });
});
