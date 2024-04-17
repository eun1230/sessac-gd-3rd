// 커스텀 hook 만들기

// 토글 hook을 만들기 위해 state가 필요하기 때문에 import
import { useState } from 'react';

// 토글이란 두 가지 상태만 가지고 있어 서로 다른 값으로 반전시키는 기능
// useToggle hook은 컴포넌트 조건부 렌더링, 체크박스, 다크/라이트모드 전환, 모달창 열기등등
// 이 토글 기능은 결국 동일한 로직으로 이루어져있다.
// 따라서 반복할 필요 없이 커스텀 hook으로 만들어 사용하면 편리하다.

export default function useToggle(initialValue = false) {
  // 인자로 받은 값을 기본state상태로 지정
  const [value, setValue] = useState(initialValue);

  /* 
  const [isShow, setIsShow ]= useState(false);
  const setIsShow = ()=> {setIsShowState(!isShow);}
->  여기서 두번째 구조분해할당요소인 setIsShow는 state의 setter함수가 아닌 
 useToggle hook에서 선언한 원래 isShow state의 값을 반전시키는 함수이다.

  const [isQnaOpne, setIsQnaOpen] = useState(false);
  const setIsQnaOpen = ()=> {setIsQnaOpenState(!isQnaOpne);}
  와 동일한 뜻
  */
  //value라는 값을 반전시켜주는 toggleValue함수
  const toggleValue = () => setValue(!value);

  //return 값은 state인 value와 해당 state를 반전시키는 toggleValue 함수
  return [value, toggleValue];
}
