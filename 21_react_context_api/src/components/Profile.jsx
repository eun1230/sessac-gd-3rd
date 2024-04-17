import { AgeContext } from '../contexts/AgeContext';
import { UserContext } from '../contexts/UserContext';
import { useContext, useRef } from 'react';

export default function Profile() {
  // AgeContext의 age와 setAge
  // UserContext의 name과 setName모두 사용

  const ageContext = useContext(AgeContext);
  console.log(ageContext); // 객체형태 -> 구조분해할당가능

  const { age, setAge } = useContext(AgeContext);

  const { name, setName } = useContext(UserContext);

  const ageRef = useRef();
  const nameRef = useRef();

  const changeInfo = () => {
    if (
      nameRef.current.value.length < 1 ||
      nameRef.current.value.trim() === ''
    ) {
      alert('이름을 다시 입력해주세요');
      nameRef.current.focus();
      return;
    } else if (
      ageRef.current.value.length === 0 ||
      ageRef.current.value.trim() === '' ||
      ageRef.current.value < 1
    ) {
      alert('나이를 입력해주세요');
      ageRef.current.focus();
      return;
    }
    setAge(Number(ageRef.current.value));
    ageRef.current.value = '';
    setName(nameRef.current.value);
    nameRef.current.value = '';
  };

  return (
    <div>
      <hr />
      -- profile --
      <div>
        <div> 이름 : {name} </div>
        <div> 나이 : {age} </div>
        <input type="text" placeholder="이름입력" ref={nameRef} />
        <input type="number" placeholder="나이입력" ref={ageRef} />
      </div>
      <button onClick={changeInfo}>프로필변경</button>
    </div>
  );
}
