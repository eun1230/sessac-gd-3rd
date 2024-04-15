import { useState } from 'react';

export default function FuncEvent() {
  const [msg, setMsg] = useState('안녕👋');
  const [menu, setMenu] = useState(' ');

  const msgToEng = () => {
    setMsg('🔥 Fighting 🔥 ');
  };

  const msgToKor = () => {
    setMsg('안녕👋');
  };

  const alertMsg = (message) => {
    alert(message);
  };
  
  const handleEnter = (e) => {
    // console.log(e);
    // e 는 리액트 합성 이벤트 객체를 의미하고 target은 해당 이벤트가 발생한 요소에 접근할 수 있는 것.
    // key는 해당 이벤트가 발생하기 위해 눌려진 키보드 키를 의미하고 일반 문자는 process로, enter는 enter로 값을 가진다.
    // code는 해당 이벤트가 발생하기 위해 눌려진 키보드 키를 더 자세히 확인할 수 있다. 
    // 일반 문자는 keyA와 같이 key뒤에 눌려진 키를 확인할 수 있다.
    if (e.key === 'Enter') {
      console.log('enter키 입력됨');
      alert(`점심 메뉴는 ${menu}으로 결정했습니다 😆 `)
    }
  };

  return (
    <>
      <h3>함수형 컴포넌트 Event Handling</h3>
      <div> {msg} </div>
      클릭 이벤트 발생 시 실행할 함수 자체를 onClick에 전달 👉🏻 함수 호출 x 
      <button onClick={msgToEng}> 🔥 파이팅 🔥 </button>
      <button onClick={msgToKor}> 안녕👋 </button>
      <br />
      {/* 함수에 매개변수를 전달하는 경우 */}
      {/* 방법 1 .
      onClick에서 익명함수를 선언하고, 그 내부에 함수를 실행시킨다.
      익명함수를 전달하는 것이 되고 👉🏻 alertMsg 함수 자체를 호출한 것이 아니다. */}
      <button
        onClick={() => {
          alertMsg(' Hi 👋🏻 ');
        }}
      >
        메세지 alert창에 띄우기
      </button>
      {/* 방법 2 .
      바인드 메서드 사용 (bind())
      새로운 함수를 생성한다. 받게 되는 첫 인자의 value로는 this 키워드를 설정 */}
      <br />
      <button onClick={alertMsg.bind(null, ' Bye 👋🏻 ')}>
        메세지 alert창에 띄우기 2
      </button>
      <br />
      <br />
      input태그에서 변경사항 발생 시 해당 input의 value를 콘솔에 출력 하고
      <br />
      input태그에서 enter키를 누르면 입력한 값을 alert으로 보여주기 <br />
      <input
        type="text"
        value={menu}
        placeholder="오늘 점심은?"
        onChange={(e) => {
          // console.log(e.target.value);
          // console.log(e); // 콘솔에 찍어보면 synthetic이벤트 객체로 출력
          setMenu(e.target.value);
        }}
        // onKeyDown={() => {
        //   //키보드 뭐라도 누르면 실행되는 것을 볼 수 있음
        //   console.log('실행');
        // }}
        onKeyDown={handleEnter}
      />
      <br />
      👆 여기서 사용되는 e는 <br />
      브라우저의 native 이벤트 객체가 아닌 react의 synthetic이벤트 객체이다.
    </>
  );
}
