import {  useState } from 'react';
import { UserContext } from '../../contexts/UserContext';

//props로 받아서 하위요소(children)에 사용할 수있도록 한다.
export default function UserProvider(props) {
  const [name, setName] = useState('eun');

  return (
    <UserContext.Provider value={{ name, setName }}>
      {props.children}
    </UserContext.Provider>
  );
}
