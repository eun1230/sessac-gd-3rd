/* 함수형 컴포넌트에서의 lifeCycle */
// 함수형 lifeCycle사용하기 위해서는 useEffect import
import { useState, useEffect } from 'react';

const MyComponent = (props) => {
  const { number } = props;
  const [text, setText] = useState('');
  /* useEffect에서는 콜백함수와 배열을 전달한다.
  컴포넌트 monut시점과 unmount 시점에만 실행되는 로직의 경우 
   하나의 useEffect에 작성할 수 있다. */

  useEffect(() => {
    // 컴포넌트 Mount시 실행
    console.log('😁 함수형 컴포넌트 Mount');
    //컴포넌트 UnMonut시 실행
    return () => console.log('😴 함수형 컴포넌트 unMonunt  ');
  }, []);

  // 컴포넌트 Update시 실행
  useEffect(() => {
    // number의 변화가 일어났을 때
    console.log('🔢 함수형 컴포넌트 Update (number) ');
  }, [number]);

  useEffect(() => {
    //text의 변화가 일어났을 때
    console.log('🔠 함수형 컴포넌트 update (text)');
  }, [text]);

  /*
// 의존성 배열 내부에 여러 요소 작성 가능
  useEffect(() => {
    //number와 text 둘다 변화 일어났을 때 
    console.log('🔢, 🔠 함수형 컴포넌트 update (number, text)')
  }, [number, text]);
*/

  // 컴포넌트 Mount & Update시 실행 👆🏻 위에 useEffect와 동일함
  useEffect(() => {
    console.log(
      '❗️ 함수형 컴포넌트 Mount & Update❗️, (의존성 배열 작성 안한 것)'
    );
  });

  return (
    <>
      <div> MyComponent function형 {number} </div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>{text}</div>
    </>
  );
};

export default function FuncLifeCycle() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button onClick={() => setNumber(number + 1)}>number+1</button>
      <button onClick={() => setVisible(!visible)}>MyComponent 토글</button>
      {visible && <MyComponent number={number} />}
    </>
  );
}
