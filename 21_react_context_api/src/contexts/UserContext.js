import { createContext } from 'react';

// value값을 찾지 못했을 때 기본값 데이터로 초기화할 객체
const defaultUser = {
  name: 'eun',
  setName: () => {},
};

export const UserContext = createContext(defaultUser);
