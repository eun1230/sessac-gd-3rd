import { useState } from 'react';

export default function Prac1() {
  // 기존의 입력 되어 있는 state값(id, user, email)
  // 서버에서 받아왔다는 전제하에 작성되어 있다.
  const [data, setData] = useState([
    { id: 1, user: '장원영', email: 'wonyoung@gmail.com' },
    { id: 2, user: '안유진', email: 'yujin@gmail.com' },
  ]);
  // 초기 input과 email값을 빈 문자열로 지정해준다.
  const [inputUser, setInputUser] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  // 하나씩 추가될 아이디값을 길이 + 1 만큼으로 초기화 한 것
   // ex ) 길이가 4라면 그 다음 아이디는 5로 저장될 수 있도록 아이디 값을 초기화
  const [nextId, setNextId] = useState(data.length + 1); // useState(3)

  // 사용자의 이름을 받는 input에 변경사항이 있을 때 실행되는 함수
  // onChange로 연결 되어 있고 해당 함수가 실행될 대
  // 해당 이벤트가 발생한 input(이름)의 value를 inputUser State의 값으로 업데이트한다.
  const onChangeUser = (e) => setInputUser(e.target.value);

  // 해당 이벤트가 발생한 input(이메일)의 value를 inputEmail State의 값으로 업데이트한다.
  const onChangeEmail = (e) => setInputEmail(e.target.value);

  // 등록버튼을 클릭했을 때 실행되는 함수
  const eventClick = () => {
    // 새로운 데이터를 기존 데이터 배열에 추가
    // 참고) concat(): https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    // const nextData = data.concat({
    //   id: nextId,
    //   user: inputUser,
    //   email: inputEmail,
    // });

    // 또는
    // nextData는 새로 업데이트 될 데이터이고
    // 원래의 data state의 값을 spread 연산자를 사용해 불러오고
    // 가장 마지막에 새로 입력받은 user의 정보를 객체 형태로 추가하고 있음(+=)
    const nextData = [
      ...data,
      {
        id: nextId,
        user: inputUser,
        email: inputEmail,
      },
    ];
    // 새로 저장될 데이터, 아이디값을 nextId+1로 set
    setNextId(nextId + 1);
    // nextData를 data의 state로 업데이트 
    setData(nextData);
    // 다시 input태그 (유저이름) 초기화
    setInputUser('');
    // 다시 input태그 (이메일) 초기화
    setInputEmail('');
  };

  // Enter키가 눌렸다면 (이벤트) -> eventClick함수실행
  const onKeyDownEnter = (e) => {
    if (e.key === 'Enter') {
      eventClick();
    }
  };

  // id값을 받아와서 filtering해준다. 
  // data의 아이디값과 인자값으로 받아온 id값을 비교해서 
  // 필터링된 NextData를 data의 state값으로 업데이트 한다.
  const onRemoveData = (id) => {
    const NextData = data.filter((data) => data.id !== id);
    setData(NextData);
  };

// dataList에 data를 추가한다 
// 즉, 데이터의 이름과 이메일을 h2태그로 보여주고 
// 더블클릭시 발생하는 이벤트 onDoubleClick으로 삭제함과 동시에 data의 아이디값을 넘겨준다.
// 아이디값을 넘겨주지 않으면 해당 내용을 찾아 삭제할 수 없기 때문
  const dataList = data.map((data) => (
    <h2 key={data.id} onDoubleClick={() => onRemoveData(data.id)}>
      {data.user}: {data.email}
    </h2>
  ));

  return (
    <div>
      <input
        type="text"
        name="user"
        placeholder="이름"
        value={inputUser}
        onChange={onChangeUser}
      />

      <input
        type="text"
        name="email"
        placeholder="이메일"
        value={inputEmail}
        onChange={onChangeEmail}
        onKeyDown={onKeyDownEnter}
      />

      <button onClick={eventClick}>등록</button>

      <div>{dataList}</div>
    </div>
  );
}
