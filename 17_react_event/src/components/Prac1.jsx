import { useState } from 'react';

export default function Prac1() {
  const [msg, setMsg] = useState('Hello World!');

  const ChangeTxt = (message) => {
    setMsg(message);
  };

  return (
    <>
      <div>{msg}</div>
      <button onClick={ChangeTxt.bind(null, 'GoodBye World!')}>변경</button>
    </>
  );
}
