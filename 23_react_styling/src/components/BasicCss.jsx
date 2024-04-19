import '../styles/basicCss.css';

export default function BasicCss() {
  const divStyle = {
    backgroundColor: 'navy',
    color: 'pink',
    fontWeight: 'bold',
    textAlign: 'center',
  };
  return (
    <>
      <h3>리액트에서 스타일 적용하는 방법 4가지</h3>

      <ol>
        <li>인라인스타일</li>
        <h1>일반 css 사용</h1>
        <div
          style={{
            backgroundColor: 'pink',
            color: 'navy',
            fontSize: '25px',
            textAlign: 'right',
          }}
        >
          인라인스타일
        </div>
        <div style={divStyle}>style에 객체변수전달</div>
        <br />
        <br />
        <li>일반 css파일 만들어 import</li>
        <h1>css파일 사용해서 스타일링</h1>
        <div className="box">.box</div>

        <div className="container">
          <div className="item item1">.item.item1</div>
          <div className="item ">.item</div>
        </div>
      </ol>
    </>
  );
}
