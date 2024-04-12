export default function Modal(props) {
  
  // msg : 모달에서 보여줄 메시지
  // isInput : 인풋창의 유무
  // isCancel : 취소버튼의 유무
  // setShow :  부모 컴포넌트의 show state의 setter함수
  const { msg, isInput, isCancelBtn, setShow } = props;
  return (
    <div className="modal-container">
      <button onClick={() => setShow(false)}> X </button>
      <div>{msg}</div>

      {/* 인풋이 있으면 보여주고 없으면 안보여줌 */}
      {isInput && <input type="text" />}
      <button
        onClick={() => {
          // 여기서 확인버튼 클릭했을 때 로직 작성하면 됨
          console.log('확인버튼클릭되었음');
          setShow = false; // 확인버튼 클릭 시 모달 창 닫음
        }}
      >
        확인
      </button>
      {isCancelBtn && <button onClick={() => setShow(false)}>취소</button>}
    </div>
  );
}

// 기본값 세팅
Modal.defaultProps = {
  msg: '기본 메시지',
  isInput: false,
  isCancel: false,
};


