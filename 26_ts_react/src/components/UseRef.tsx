import { useRef } from 'react';

export default function UseRef() {
  // 1. DOM 요소에 접근할 때
  // input 요소의 경우
  const inputRef = useRef<HTMLInputElement>(null); // null을 전달해주어야 함

  // 2. 리렌더링 되어도 유지되는 로컬 변수 필요할 때
  const localVal = useRef<string>('리렌더링 돼도 유지됨');
  return (
    <>
      <h2>UseRef</h2>
      <input type="text" ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>
        input에 focus 시키기
      </button>
      <br />
      만약 inputRef에 값이 없다면 current값이 있을지 없을지 모르기 때문에 "?""
      작성 👉🏻 inputRef.current?.focus()
      <br />
      <div> localVal : {localVal.current}</div>
    </>
  );
}
