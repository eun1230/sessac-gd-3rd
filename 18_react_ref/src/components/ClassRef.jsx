import React, { Component, createRef } from 'react';

export default class ClassRef extends Component {
  input = createRef(); // input = document.querySelector('input'); 과 동일함
  localVar = createRef();
  state = {
    stateVar: 0,
  };
  render() {
    return (
      <div>
        <h2>클래스형 컴포넌트에서 ref사용하기 </h2>
        <input type="text" ref={this.input} />
        <button onClick={() => this.input.current.focus()}> 버튼 </button>
        👈 this.input.current.focus()으로 ref활용

        <div>localVar : {this.localVar.current}</div>
        <button onClick={() => this.localVar.current++}>localVar++</button>
        <div>state : {this.state.stateVar}</div>
        <button onClick={() => this.setState({ state: this.state.stateVar++ })}>
          state++
        </button>
      </div>
    );
  }
}
