import { render } from '@testing-library/react';

import CourseInput from './course-input';

describe('CourseInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CourseInput />);
    expect(baseElement).toBeTruthy();
  });
});
