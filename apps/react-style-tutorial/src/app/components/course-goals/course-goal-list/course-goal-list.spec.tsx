import { render } from '@testing-library/react';

import CourseGoalList from './course-goal-list';

describe('CourseGoalList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CourseGoalList />);
    expect(baseElement).toBeTruthy();
  });
});
