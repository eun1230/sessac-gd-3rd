//이 파일은 (.jsx) -> jsx문이 사용되어 있다 라는걸 명시하기 위해 .jsx로 확장자를 설정
//---------------------------------------------------------------------------

/*
// 1. props 매개변수(인자,argument)
export default function FuncProps(props) {
  //부모 요소에서 props전달한 데이터가 props 내부에 객체 형태로 저장
  console.log(props);
  return (
    <>
      <h1>함수형 컴포넌트에서 props사용</h1>
      <div>전달받은 props 객체를 점 접근법으로 바로 접근해 사용</div>
      <div>weather props로 전달받은 데이터 : {props.weather} </div>
      <div>feeling props로 전달받은 데이터 : {props.feeling} </div>
    </>
  );
}
*/
//---------------------------------------------------------------------------

/*
// 2. props를 구조 분해 할당해서 weather와 feeling으로 바로 값을 사용할 수 있도록 하기
export default function FuncProps(props) {
  const { weather, feeling } = props;
  console.log('weather :', weather);
  console.log('feeling :', feeling);
  return (
    <>
      <h1>함수형 컴포넌트에서 props사용</h1>
      <div>전달받은 props 객체를 구조분해하여 사용</div>
      <div>weather props로 전달받은 데이터 : {weather} </div>
      <div>feeling props로 전달받은 데이터 : {feeling} </div>
    </>
  );
}
*/
//---------------------------------------------------------------------------
/*
// 3. 매개변수로 props를 받아올 때부터 구조분해
export default function FuncProps({ weather, feeling }) {
  console.log('weather :', weather);
  console.log('feeling :', feeling);
  return (
    <>
      <h1>함수형 컴포넌트에서 props사용</h1>
      <div>매개변수로 props를 받아올 때부터 구조분해하여 사용</div>
      <div>weather props로 전달받은 데이터 : {weather} </div>
      <div>feeling props로 전달받은 데이터 : {feeling} </div>
    </>
  );
}
*/

//---------------------------------------------------------------------------
/*
//4. props handling
import PropTypes from 'prop-types';

export default function FuncProps({ weather, feeling, date }) {
  console.log('weather :', weather);
  console.log('feeling :', feeling);
  return (
    <>
      <h1>함수형 컴포넌트에서 props사용</h1>
      <div>매개변수가 들어오지 않았을 때 default로 가져온 값</div>
      <div>오늘의 날짜 {date} </div>
      <div>weather props로 전달받은 데이터 : {weather} </div>
      <div>feeling props로 전달받은 데이터 : {feeling} </div>
    </>
  );
}
// weather의 props 기본값 설정, 만약 weather props가 전달되지 않는다면 default props에서 해당값을 찾아 사용
FuncProps.defaultProps = {
  weather: 'cloudy',
};

//props의 타입지정
//전달받을 props의 타입을 짖어해 예기치 못한 에러를 줄이기 위함
FuncProps.propTypes = {
  weather: PropTypes.string,
  feeling: PropTypes.string,
  date : PropTypes.number
};

//PropTypes.isRequired => ? 필수로 해당 props를 전달하도록 제한 -> 전달안하면 콘솔에 에러남
//이외의 props들은 전달되지 않으면 undefined 일 뿐 에러는 안남 - > js의 유연한 특성 때문

*/

//---------------------------------------------------------------------------

// 5. props.children
// 부모 컴포넌트에서 해당 컴포넌트가 import되어 사용될 때 이 컴포넌트의 content를 가지고 와야 하는 경우

// 문자열
// export default function FuncProps(props) {
//   return (
//     <div>{props.children}</div>
//   )
// }

// 함수
// export default function FuncProps(props) {
//   return <div onClick={props.children}>클릭</div>;
//  }

// 많은 요소 전달
export default function FuncProps(props) {
  return <>{props.children}</>;
}