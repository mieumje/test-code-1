import { screen } from '@testing-library/react';
import React from 'react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

it('className prop으로 설정한 css class가 적용된다.', async () => {
  // 1. Arrange
  // React Testing Library를 통해 컴포넌트를 렌더링한다.
  await render(<TextField className="my-class" />);
  // 2. Act
  // 3. Assert
});
