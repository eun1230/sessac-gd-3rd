import { useState, useReducer } from 'react';
/*
useReducer Hook
- reducer : state를 업데이트 하는 역할
- dispatch : state를 업데이트 시켜주기 위한 요구
- action : 요구의 내용
*/
const reducer = (prevState, action) => {
  console.log('dispatch 호출 시 reducer 동작');
  console.log('prevState', prevState);
  console.log('action', action);
  // dispatch의 인자로 전달되는 값이 action

  /*
  reducer 함수 내부에는 조건문을 많이 사용한다.
  swicth나 if else 등등
  복잡한 state를 관리한다는 것은 state가 한 가지만 있는 것이 아니라
  업데이트 로직이 한 가지 있다는 것이 아니기 때문에 
  */
  switch (action.type) {
    case 'deposit': // 입금
      return Number(prevState) + Number(action.payload);
    case 'withdraw': // 출금
      return Number(prevState) - Number(action.payload);
    case 'withdrawAll': // 출금
      return 0;
    default: // 그 외 모든 경우
      return Number(prevState);
  }
};

export default function UseReducer() {
  // 출금하고 입금할 값 ( 입력받을 값 )
  const [number, setNumber] = useState(0);

  // 현제 잔고의 값
  // const [state, dispatch] = useReducer(리듀서, 스테이트 초기값)
  const [money, dispatch] = useReducer(reducer, 0);
  // reducer는 따로 만들어 주어야 함
  // 잔고(money state)를 수정하고 싶은 경우 리듀서가 디스패치를 불러줄 것
  // 디스패치는 인자로 action을 가지고 있음.
  // 디스패치는 state를 바꾸는 게 아니라 state를 업데이트하기 위한 "요구(action)"를 담아서 reducer로 전달
  return (
    <>
      <h2>useReducer Hook</h2>
      <div> 잔고 {money}</div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        step="1000"
      />

      <button
        onClick={() => {
          dispatch({ type: 'deposit', payload: number });
        }}
      >
        입금
      </button>

      <button
        onClick={() => {
          dispatch({ type: 'withdraw', payload: number });
        }}
      >
        출금
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'withdrawAll', payload: null });
          alert('really?');
          setNumber(0);
        }}
      >
        전액출금
      </button>
    </>
  );
}
