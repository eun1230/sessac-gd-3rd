// import React from 'react';
import { useState } from 'react';

export default function FuncState() {
  //vanilla JS로 작성
  let apple1 = 'apple';
  const inEng = () => {
    const content = document.querySelector('.state');
    content.innerText = '사과';
    apple1 = '사과';
    console.log(apple1);
  };
  //useState 사용
  //import로 불러오기
  /*
  const [state변수명, state를 변경시키는 setter함수] = useState(state의 초기값) 
  useState를 사용해 state를 선언 시 state와 state를 변경시키는 setter함수를 배열로 반환
  해당 state와 setter함수를 구조 분해 할당 하여 변수에 저장하고 바로 사용
  */

  const [apple, setApple] = useState('사과');
  const [apple2, setApple2] = useState('사과');
  const [showEnglish, setShowEnglish] = useState(true);
  const [number, setNumber] = useState(0);

  return (
    <>
      <hr />
      <h2> Function-Component : State</h2>
      <div>이 컴포넌트는 vanila JS로 작성</div>
      <button onClick={inEng}> 한글로 바꾸기 </button>
      <div className="state">{apple1}</div>
      <hr />
      <h2> Function-Component : State</h2>
      <div>이 컴포넌트는 useState 사용</div>
      <button onClick={() => setApple('apple')}> 영어로 바꾸기 </button>
      <div>{apple}</div>
      <hr />
      <h2> Function-Component : number State - 1씩 증가시키는 버튼</h2>
      <div>{number}</div>
      <button
        onClick={
          /*
        number state를 1 더하는 로직 다음에 alert을 띄우는 로직이 작성되어있어도 alert의 보이는 값은 1 더하기 전 number값이 보인다.
        state의 setter함수는 비동기적으로 동작한다.
        그래서 number라는 state가 1 더한 값으로 업데이트 되기 전 alert창이 띄워져버려서 1 더한 값이 아닌 원래 값이 보이게 된다.
        */
          () => {
            // setNumber(number + 1);
            // alert(number);
            /*
            이를 해결하기 위한 하나의 예시
            state의 setter함수에 인자로 업데이트 할 값이 아닌 콜백을 전달한다.
            해당 콜백의 인자로는 원래 state값이고 원래 state값에 1 더하는 로직
            setNumber((prevNum) => prevNum+1)
            */
            setNumber((prevNum) => {
              // alert(prevNum + 1);
              return prevNum + 1;
            });
          }
        }
      >
        {' '}
        +1{' '}
      </button>
      <hr />
      <h2>버튼 클릭 - 토글</h2>
      <div> useState 사용 </div>
      <button
        onClick={() => {
          setShowEnglish(!showEnglish);
        }}
      >
        {showEnglish ? '한글' : '영어'}로 바꾸기
      </button>
      <div>{showEnglish ? 'apple' : '사과'}</div>
    </>
  );
}
