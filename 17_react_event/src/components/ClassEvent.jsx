import React, { Component } from 'react';

export default class ClassEvent extends Component {
  constructor(props) {
    super(props);
    //핸들클릭이라는 함수를 함수자체의 this가 아닌 클래스 자체를 의미하는 this로 바인딩(묶어줌)
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    msg: '🌸🌼',
  };

  // 함수 선언문을 사용해 메소드를 정의
  // 함수 내부의 this는 클래스의 this와 다른 자체적인 this가 된다.
  // 생성자 함수 내부에서 this를 원하는 대로 바인딩 해주는 것.
  handleClick() {
    this.setState({ msg: '🌼🌸🌼🌸' });
  }

  render() {
    return (
      <>
        <h3>클래스형 컴포넌트에 Event Handling</h3>
        <div>state값의 msg ➡️ {this.state.msg}</div>
        <button onClick={this.handleClick}>변경</button>
        <br />
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </>
    );
  }
}
