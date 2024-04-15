import { useState, useRef } from 'react';

export default function FuncRef() {
  //react에서 DOM요소 조작
  //react 에서는 DOM요소에 직접적으로 접근해 조작하지 않는 것이 좋다.
  // virtual DOM을 사용하기 때문에 직접적인 DOM 조작은 react에서 지양해달라고 공식문서에 기재되어 있다.
  const input = useRef();

  const focusInput = () => {
    console.log(input); // current : input으로 객체가 콘솔창에 출력된다.
    console.log(input.current); // input태그 , <input type='text>가 콘솔창에 출력된다.

    input.current.focus();
  };

  // ref를 변수로 사용
  const localVar = useRef(0);
  const [stateVar, setStateVar] = useState(0);
  let justVar = 0;

  const inCreLocalVar = () => {
    //localVar를 증가시키는 함수
    localVar.current++; // current까지 접근해야 함 주의
    console.log(localVar.current);
  };

  const inCrejustVar = () => {
    justVar++;
    console.log(justVar);
  };

  return (
    <>
      <h2>함수형 컴포넌트에서 ref사용하기 </h2>
      useRef를 사용해 만든 ref는 DOM요소와 연결해 사용하고 <br />
      ref속성으로 만든 ref를 전달
      <br />
      <input type="text" ref={input} />
      <button onClick={focusInput}>버튼</button>
      <br />
      버튼을 누르면 일어날 이벤트를 위해 ref를 사용. ⏏️버튼클릭시 input이
      포커싱된다.
      <br /> <br />
      <h2>--------- ref사용과 state의 차이 ---------- </h2>
      <h3>localVar.current : {localVar.current}</h3>
      <h3>state : {stateVar}</h3>
      <h3>일반변수 : {justVar}</h3>
      <button onClick={inCreLocalVar}>localVar+1</button>
      <button onClick={() => setStateVar(stateVar + 1)}>state+1</button>
      <button onClick={inCrejustVar}>일반변수+1</button>
    </>
  );
}
