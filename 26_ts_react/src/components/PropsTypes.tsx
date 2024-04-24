interface Props {
  name: string;
  age?: number;
}

export default function PropsTypes({ name, age }: Props) {
  return (
    <>
      <h2>props로 전달받은 데이터의 타입 interface로 지정하기</h2>
      <div>이름 : {name}</div>
      {age && <div>나이 : {age}살</div>}
    </>
  );
}

// 구조분해할당버전
// export default function PropsTypes(props: Props) {
//   const { name, age } = props;
//   return (
//     <>
//       <h2>props로 전달받은 데이터의 타입 interface로 지정하기</h2>
//       <div>name : {name}</div>
//       <div>age : {age}</div>
//     </>
//   );
// }
