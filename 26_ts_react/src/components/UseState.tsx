import { useState } from 'react';
// 따로 저장했던 interface 불러와 사용하기
import { dataTypes } from '../types/todoData';

interface Props {}

// types디렉토리로 이동해 다른 파일에서도 사용할 수 있도록 함,
// interface dataTypes {
//   id: number;
//   todo: string;
//   done: boolean;
// }

export default function UseState(props: Props) {
  const [cnt, setCnt] = useState<number>(0);

  // 복잡한 데이터를 저장하는 state사용시
  // 방법 1 : any사용 , 너무 복잡한 데이터의 경우 어쩔 수없이 사용
  // 방법 2 : interface만들어서 사용하기
  const [data, setData] = useState<dataTypes[]>();

  // setData([
  //   {
  //     id: 1,
  //     todo: '할 수 있다 외치기',
  //     done: false,
  //   },
  //   {
  //     id: 2,
  //     todo: 'ts사용 연습',
  //     done: false,
  //   },
  //   {
  //     id: 3,
  //     todo: '하이',
  //     done: false,
  //   },
  // ]);

  return (
    <>
      <h2>UseState로 count state만들기 </h2>
      <h3>{cnt}</h3>
      <button onClick={() => setCnt(cnt + 1)}>+1</button>
      <button onClick={() => setCnt(cnt - 1)}>-1</button>
      <button onClick={() => setCnt(0)}>reset</button>
    </>
  );
}
