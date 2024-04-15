import useToggle from '../hooks/useToggle';

export default function CustomHook() {
  const [isShow, setIsShow] = useToggle();
  console.log(isShow);

  return (
    <>
      <h2>CustomHook</h2>{isShow && <div>Hello</div>}
      <button onClick={setIsShow}> useTogole Hook 사용하기 </button>
      
    </>
  );
}
