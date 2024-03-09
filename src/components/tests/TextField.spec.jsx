import { screen } from '@testing-library/react';
import React from 'react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

it('className prop으로 설정한 css class가 적용된다.', async () => {
  // 1. Arrange
  // React Testing Library를 통해 컴포넌트를 렌더링한다.
  await render(<TextField className="my-class" />);

  // 2. Act
  // className prop이 잘 전달 되었는지를 검증하는 테스트 이므로 Act 단계(클릭 또는 메소드 호출 등...)는 생략

  // 3. Assert
  // placeholder, role, text 등의 값으로 요소를 조회(React Testing Library 제공 API = 쿼리)할 수 있다.
  // 이러한 방식으로 조회하면 내부 구조와 무관하게 원하는 테스트 요소만 조회할 수 있다.

  // vitest의 expect 함수를 통해 Assert(검증)

  // className이란 내부 prop이나 state 값에 대한 검증 (X)
  // 렌더링되는 DOM 구조가 올바르게 변경되었는지 확인 (O) -> 최종적으로 사용자가 보는 결과는 DOM
  expect(screen.getByPlaceholderText('텍스트를 입력해 주세요.')).toHaveClass(
    'my-class ',
  );
});
