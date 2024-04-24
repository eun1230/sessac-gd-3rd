import React from 'react';

export default function EventObj() {
  // react의 마우스이벤트의 event객체를 인자로 받아 사용
  // 이벤트가 발생하는 요소는 button이라는 html요소이기 때문에 type을 <HTMLElement>로 지정
  const buttonClick = (event: React.MouseEvent<HTMLElement>) => {
    alert(event.target);
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code) {
      console.log('e.target: ', e.code);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <h2> e 객체 타입(이벤트) </h2>
      <button onClick={() => alert('클릭!!!')}>버튼 1 : 그냥 사용</button>
      <button onClick={(event) => alert(event.target)}>
        버튼 2 : 바로 이벤트 객체 사용
      </button>
      <button onClick={buttonClick}>
        버튼 3 : 함수를 만들어서 event객체 사용
      </button>
      <br />
      키보드 이벤트 .. 키보드 눌렀을때
      <input type="text" onKeyDown={handleKeydown} />
      <br />
      input 변경 감지 이벤트
      <input type="text" onChange={handleChange} />
    </>
  );
}
