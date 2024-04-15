/* 1. text state 선언
   2. input요소 만들어서 해당 input 변경사항 발생하면 input의 값을 text state에 저장 */

import { useCallback, useState } from 'react';

export default function UseCallback2() {
  const [text, setText] = useState('');

  /* input태그에 onchange속성으로 연결된 함수의 경우
  업데이트가 매우 잦아 리렌더링 될 때마다 이벤트 핸들러 함수가 생성이 된다.
  로직 자체에는 아무런 변화가 없으나 불필요하게 계속 함수가 생성된다.

  // const handleChange = (e) => {
  //   setText(e.target.value);
  // };

  그래서 useCallback hook을 사용해서 콜백함수자체를 저장하고, 사용해서
  불필요하게 함수가 생성되지 않게 한다.
  의존성배열이 빈 배열인경우 useCallback hook을 사용한 함수는 다시 선언되지 않난다.
  */
  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);
// 결과는 동일하지만 함수가 메모리에 저장되어 다시 선언되지 않고 불러와 사용하는 중
  return (
    <div>
      <h2>useCallback Hook 2</h2>
      <input type="text" value={text} onChange={handleChange} />
      <div> text state : {text || '없음'} </div>
    </div>
  );

}

/*
useMemo vs useCallback

const memoizationValue = useMemo( () => function, [dependencies]);
const memoizationCallback = useCallback( () =>  function, [dependencies]);

useCallback은 useMemo를 기반으로 만들어진 Hook
useCallback은 useMemo에서 "값"이 아닌 "함수를" 사용할 때의 편의성을 높이기 위해 만들어진 hook

공통점 : 성능 최적화
차이점 : 특정 "값" ( useMemo )를 재사용할지, 특정 "함수"(useCallback)를 재사용할지에 따라 선택적으로 사용

useMemo는 값의 재사용을 위해 전달된 함수를 실행하고, 그 결과를(리턴값) 메모이제이션
useCallback은 함수의 재사용을 위해 전달된 "함수자체"를 메모이제이션


*/ 