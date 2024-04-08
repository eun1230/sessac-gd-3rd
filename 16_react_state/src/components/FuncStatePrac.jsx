import React from 'react';
import { useState } from 'react';

export default function FuncStatePrac() {
  const [num, setNumber] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  let emot = num3 < 8 ? '🥲' : '😍';

  const increase = () => {
    setNumber(num + 1);
  };
  const decrease = () => {
    setNumber(num - 2);
  };

  const increase2 = () => {
    setNum3(num3 + 2);
  };
  const decrease2 = () => {
    setNum3(num3 - 1);
  };

  return (
    <div>
      <hr />
      <h2>클래스변형 - 함수형 컴포넌트 (+2),(-1) </h2>
      <button
        onClick={() => {
          setNum2((prevNum) => {
            return prevNum + 2;
          });
        }}
      >
        +2
      </button>
      <button
        onClick={() => {
          setNum2((prevNum) => {
            return prevNum - 1;
          });
        }}
      >
        -1
      </button>
      <h3>{num2}</h3>

      <hr />
      <h2>함수형컴포넌트 (+1),(-2)</h2>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-2</button>

      <h3>{num}</h3>

      <hr />
      <h2>선택실습 이모티콘</h2>
      <h2>
        {num3}
        {emot}
      </h2>
      <button onClick={increase2}>+2</button>
      <button onClick={decrease2}>-1</button>
    </div>
  );
}
