import { useState } from 'react';

// export default function Prac3() {
//   const [msg, setMsg] = useState('사라져라');
//   const [text, setText] = useState('안녕하세요');
//   return (
//     <div>
//       <button
//         onClick={() => {
//           if (msg === '사라져라') {
//             setMsg('보여라');
//             setText(' ');
//           } else {
//             setMsg('사라져라');
//             setText('안녕하세요');
//           }
//         }}
//       >
//         {msg}
//       </button>
//       <h3>{text}</h3>
//     </div>
//   );
// }

export default function Prac3() {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        {display ? '사라져라' : '보여라'}
      </button>
      {display && <h2>안녕하세요</h2>}
    </>
  );
}
