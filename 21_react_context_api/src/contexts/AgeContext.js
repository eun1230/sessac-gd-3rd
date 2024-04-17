import { createContext } from 'react';

// value값을 찾지 못했을 때 기본값 데이터로 초기화할 객체
const defaultAge = {
  age: 0,
  setAge: () => {}, // 나이를 변경하는 age state의 setter함수가 될 예정, 에러나지 않도록 익명함수 사용
};

export const AgeContext = createContext(defaultAge);
