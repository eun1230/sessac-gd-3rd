import React, { Component } from 'react';

export default class ClassStatePrac extends Component {
  state = {
    num: 0,
  };
  render() {
    const { num } = this.state;
    return (
      <div>
        <hr />

        <h2>State (+2),(-1) </h2>

        <button
          onClick={() => {
            this.setState({ num: num + 2 });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState({ num: num - 1 });
          }}
        >
          -1
        </button>
        <h3>{num}</h3>
      </div>
    );
  }
}
