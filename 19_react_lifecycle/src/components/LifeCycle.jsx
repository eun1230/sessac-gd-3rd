import { useState, useEffect } from 'react';

const MyComponent = (props) => {
  const { number } = props; // props구조분해할당, number값을 저장
  const [text, setText] = useState(''); // text state를 (초기 빈문자열로) 저장

  /* 콜백함수와 배열을 전달하는 useEffect 
  컴포넌트 mount 시점과 unmount시점에만 실행되는 로직의 경우 하나의 useEffect에 작성할 수 있음 */

  useEffect(() => {
    // component마운트 시 실행
    console.log('😁 함수형 컴포넌트 Mount');
    // component 언마운트 시 실행
    return () => console.log('😴 함수형 컴포넌트 unMonunt  ');
  }, []); // 의존성 배열은 비어있음

  //component 업데이트 시 실행
  useEffect(() => {
    //number의 state값이 업데이트 될 때
    console.log('🔢 함수형 컴포넌트 Update (number) ');
  }, [number]); // 의존성배열에 number를 넘겨줌 (업데이트 되고있는 값)

  useEffect(() => {
    //text의 state값이 업데이트 될 때
    console.log('🔠 함수형 컴포넌트 update (text)');
  }, [text]); // 의존성 배열에 text를 넘겨줌 (업데이트 되고있는 값)

  // 의존성 배열 내부에 여러 요소도 작성할 수 있다.
  useEffect(() => {
    //number와 text 둘 다 state의 변화가 생겼다면
    console.log('🔢, 🔠 함수형 컴포넌트 update (number, text)');
  }, [number, text]); // 의존성 배열에 둘 다 넘겨줌

  return(
    <>
      <div> MyComponent function형 {number}</div>
      {/* input박스에 change(변화가)일어날 때 value값인 text를  setText(state값을 변경)한다. 이 때 업데이트가 되면서 useEffect가 실행됨*/}
      <input type='text' value={text} onChange={(e) =>{setText(e.target.value)}} />
      <div>{text}</div>
    </>
  );
};

export default function LifeCycle() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        number+1
      </button>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        토글
      </button>
      {/* visible이 true일때만 MyComponent를 호출하고 props로 number전달 */}
      {visible && <MyComponent number={number} />}
    </>
  );
}
