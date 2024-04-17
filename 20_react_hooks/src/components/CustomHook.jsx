import useToggle from '../hooks/useToggle';
import useTitle from '../hooks/useTitle';

export default function CustomHook() {
  const [isShow, setIsShow] = useToggle();
  const [isQnaOpen, setIsQnaOpen] = useToggle();

  useTitle('커스텀 훅 사용');

  return (
    <>
      <h2>CustomHook</h2>
      {isShow && <div>Hello</div>}
      <button onClick={setIsShow}> useTogole Hook 사용하기 </button>
      <hr />
      <div onClick={setIsQnaOpen}>Q. 리액트에서 커스텀 훅 만들 수 있나요?</div>
      {isQnaOpen && <div>A. 가능합니다.</div>}
    </>
  );
}
