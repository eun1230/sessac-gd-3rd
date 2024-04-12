import { useState } from 'react';

// export default function Prac2() {
//   const [msg, setMsg] = useState('검정색 글씨');

//   const ChangeTxt = (message) => {
//     setMsg(message);
//   };

//   return (
//     <>
//       <div className={msg === '빨간색 글씨' ? 'red-text' : msg === '파란색 글씨' ? 'blue-text' : ''}>{msg}</div>
//       <button onClick={() => ChangeTxt('빨간색 글씨')}>빨간색</button>
//       <button onClick={() => ChangeTxt('파란색 글씨')}>파란색</button>
//     </>
//   );
// }

export default function Prac2() {
  const [msg, setMsg] = useState({ color: 'black', text: '검정색' });

  return (
    <>
      <div style={{ color: msg.color }}>{msg.text}글씨</div>
      <button onClick={() => setMsg({ color: 'red', text: '빨간색' })}>
        빨간색
      </button>
      <button onClick={() => setMsg({ color: 'blue', text: '파란색' })}>
        파란색
      </button>
    </>
  );
}
