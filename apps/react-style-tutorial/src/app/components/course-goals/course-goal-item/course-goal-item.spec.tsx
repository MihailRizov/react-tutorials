import { render } from '@testing-library/react';

import CourseGoalItem from './course-goal-item';

describe('CourseGoalItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CourseGoalItem />);
    expect(baseElement).toBeTruthy();
  });
});
