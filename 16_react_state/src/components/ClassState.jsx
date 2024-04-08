import { Component } from 'react';

export default class ClassState extends Component {
  //처음 클래스형 컴포넌트가 나왔을 때 state를 사용한 방법
  // constructor(props) {
  //   super(props); // Component클래스에서 props를 상속받고 있다는 뜻
  //   this.state = {
  //     banana: '바나나',
  //     apple: '사과',
  //     orange: '오렌지',
  //   };
  // }

  // 이런 과정이 번거롭다하여서 간단히 이렇게 작성하게 되었음 : 위와 동일한 기능을 한다.
  // 현재 클래스형 컴포넌트에서 state를 사용하는 방법이다.
  // 생성자 함수를 작성하는 대신 state만 바로 작성한다.
  // constructor생성자 함수를 작성하지 않으면
  // constructor(props)
  // {
  //   super(props);
  // }
  // 자동으로 이렇게 들어가게 된다.

  state = {
    banana: '바나나',
    apple: '사과',
    orange: '오렌지',
  };

  render() {
    const { banana } = this.state;
    return (
      <>
      
        <h2> Class-Component : State</h2>
        <button onClick={() => this.setState({ banana: 'banana' })}>
          영어로 변경
        </button>
        <div>{banana}</div>
      </>
    );
  }
}
