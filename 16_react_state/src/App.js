import './App.css';
import ClassState from './components/ClassState.jsx';
import FuncState from './components/FuncState.jsx';
import ClassStatePrac from './components/ClassStatePrac.jsx';
import FuncStatePrac from './components/FuncStatePrac.jsx';
import CharactorContainer from './components/CharactorContainer.jsx';
import Modal from './components/Modal.jsx';
import { useState } from 'react';

function App() {
  // 모달창 보여줄건지 안보여줄건지에 대한 상태값
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {/* <ClassState />
      <FuncState />
      <ClassStatePrac />
      <FuncStatePrac /> 
      <CharactorContainer /> */}
      <button onClick={() => setShow(true)}>모달 보이기</button>
      {show && <Modal msg="확인하시겠습니까?" setShow={setShow} />}
      {show && (
        <Modal msg="확인하시겠습니까?22" isInput={true} setShow={setShow} />
      )}
      {show && (
        <Modal
          msg="확인하시겠습니까?333"
          isCancelBtn={true}
          setShow={setShow}
        />
      )}
    </div>
  );
}

export default App;
