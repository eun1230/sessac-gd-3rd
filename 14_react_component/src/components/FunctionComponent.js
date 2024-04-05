// import { createFactory } from 'react';

// function FunctionComponent() {
//   return <div>함수형 컴포넌트</div>;
// }
// 따로 export
// export default FunctionComponent;

// 한번에 export, function키워드 앞에 export default로 붙여놓고 시작
// export default function FunctionComponent() {
// }
//---------------------------------------------

//rfc 자동완성 rfc + enter or tab = 파일명과 동일한 이름의 함수형 컴포넌트 만들어줌
import React from 'react';
import img from '../assets/ironman.png';


//함수형 컴포넌트에서 jsx문 사용해보기
//jsx문은 무조건 하나의 부모요소를 가지고 있어야한다.
export default function FunctionComponent() {
  const text = '안녕하세요.';
  const name = '아이언맨';
  const show = !false;

  const textStyle = {
    backgroundColor: 'pink',
    color: 'red',
    fontWeight: 900,
    fontSize: 20,
  };

  const chkUser = () => {
    if (name === '아이언맨') {
      return '안녕하세요!';
    } else if (name === '토르') {
      return '오랜만이에요!';
    } else {
      return '그리운 어벤져스';
    }
  };

  const handleClick = () => {
    alert('두번째 버튼을 클릭했어요!');
  };

  return (
    <>
      {/* 1.하나의 최상위 부모요소로 감싸서 리턴해야한다.
      - (virtualDOM를 리액트가 가지고있기 때문에 원래의 DOM과 비교하면서 틀린점을 찾기위해서 부모요소를 가져야하기 때문에 리액트가 제한한 것.)
      - virtualDOM에서 컴포넌트의 변화를 감지할 때, 효율적으로 비교할 수 있도록 컴포넌트 내부에는 하나의 DOM트리 구조로 이루어져야 한다고 React가 정한 것
      - div, section, article, header, footer등 최상위 부모요소는 어떤 요소이든 상관없다.
      - 불필요한 태그를 만들지 않기 위해서 <>,</>와 같은 태그로 감싸는 경우도 많다. => Fragment단축문법 (React에서 제공해주는 것)
      */}
      <div>함수형 컴포넌트1</div>
      <div>함수형 컴포넌트2</div>

      {/* 2-1. js문법사용가능(변수)*/}
      <div>인사 : {text} </div>
      {/* 2-2. js문법사용가능(삼항연산자를 사용한 조건부 rendering) (간단한버전)*/}
      <h3>{name === '아이언맨' ? `welcome ${name} 님` : 'who are u?'}</h3>
      {/* 2-3. js문법사용가능(삼항연산자를 사용한 조건부 rendering) (복잡버전 함수불러오기)*/}
      <h3>{chkUser()}</h3>
      {/* 2-4. js문법사용가능( &&연산자  / show가 true라면 모달창넣어주기, false라면 실행x)*/}
      <h3>{show && '모달창 넣어주기'}</h3>

      {/* 3. 인라인 스타일 적용방법 */}
      {/* <div style="background-color:pink; color:navy;"></div> --> 원래의 html버전 */}
      <div
        style={{
          backgroundColor: 'pink',
          color: 'navy',
          fontWeight: 900,
          fontSize: 20,
        }}
      >
        Avengers
      </div>
      <div style={textStyle}>Assemble</div>

      {/* 4. class와 onclick jsx에서 사용하기 */}
      {/* <div class="text-css" onclick="함수명()"></div> --> 원래의 html버전*/}
      <div className="text-css">jsx에서 css 사용하기 (className)</div>
      {/* html에서는 함수를 "호출"했지만 jsx에서는 함수를 "선언"한다. */}
      <button
        onClick={() => {
          alert('첫번째 버튼 클릭!!');
        }}
      >
        버튼
      </button>

      {/* onClick할 때는 괄호없이 함수명만 전달하고 실행한다 */}
      <button onClick={handleClick}>버튼2</button>

      {/* 5. 닫는태그 필수 !! */}
      <br />
      <br></br>
      <input />
      <input></input>
      {/* 절대경로는 public폴더 내부 */}
      {/* 공통적으로 사용할 이미지(파비콘등)을 제외하면 보통 src-> assets폴더를 생성해서 여기서 이미지를 보관하기도 한다. */}
      <img src="/logo192.png" alt="이미지" />
      {/* 이미지를 불러오려면 import해서 불러와야함 */}
      <img src={img} alt="이미지" style={{ height: 200 }} />
    </>
  );
}

