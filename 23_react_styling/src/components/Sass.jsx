import '../styles/sass.scss';

export default function Sass() {
  return (
    <>
      <h2>SASS의 .scss 확장자 사용</h2>
      <div className="sass-box">.box</div>
      <div className="sass-var">.box</div>
      <div className="sass-var2">.box</div>
      <div className="sass-calc">.box</div>
      <div className="sass-div1">
        <div className="sass-div2">
          <div className="sass-div3"></div>
        </div>
      </div>
      <div className="sass-mixin-box">
        <div className="sass-mixin"></div>
      </div>
      <button className="sass-btn"> 기본 버튼 </button>
      <button className="sass-btn sass-btn-extends">
        .sass-btn style을 상속받은 버튼
      </button>
      👉🏻확장
      <div className="sass-for-container">
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
      </div>
      <div className="sass-use-if"> @if문 사용</div>
    </>
  );
}
