import { useMemo, useState } from 'react';

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState(' ');

  // 함수는 inputVal state가 업데이트 될 때도 함수가 실행된다.
  // 콘솔이 출력되는 것을 확인할 수 있다.
  // const calc = () => {
  //   console.log('...calc...');
  //   return count * 2;
  // };

  /* useMemo 사용해서 count의 값에 변화가 있을 때만 콜백함수 실행시키기
  렌더링 과정에서 두번째 인자로 받은 의존성 배열 내 count라는 값에 변화가 생기는 순간 
  첫번째 인자로 받은 콜백함수가 실행이 되고 리턴값읇 반환한다.
  즉 inputVal이라는 state가 변경되면 컴포넌트는 리렌더링되지만
  calc함수는 다시 실행되지 않는다.
  해당 함수의 "반환값"을 "기억"하고 있다가 의존성 배열의 값(count)변경 시 재실행한다.   */

  const calc = useMemo(() => {
    console.log('...calc실행...');
    return count * 2;
  }, [count]);

  return (
    <>
      <h2>useMemo Hook</h2>
      <div>inputVal : {inputVal}</div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>count+1</button>
      <div> count : {count} </div>
      {/* useMemo사용안할 때는 함수로 호출, 
      <div> calc : {calc()} </div> */}
      {/* useMemo는 함수로 돌려받은 값을 돌려받기 때문에 ()를 쓰면 x */}
      <div> calc : {calc} </div>
    </>
  );
}
/* 
useMemo는 메모이제이션으로 수행한 연산의 결과값을 기억함으로써 불필요한 계산을 최소화하고
리렌더링을 방지할 수 있다.

useEffect vs useMemo
useeffect : 해당 컴포넌트의 렌더링이 완료된 이후 실행한다. 렌더링 후 상태가 업데이트 되었을 때를 감지하여 동작하기 때문에
리렌더링을 방지할 수 없다.
useMemo : 렌더링 과정 중에 실행한다. 렌더링 과정중에 의존성 배열의 값이 변경되었는지 확인한 후 값이 변경 되었다면, 
이전에 저장한 값과 비교해서 값이 다른 경우에만 리렌더링
useMemo는 메모이제이션을 통해 불필요한 계산을 최소화하고, 리렌더링도 막을 수 있다. 렌더링 성능을 최적화할 때 사용하는 hook이다.
*/