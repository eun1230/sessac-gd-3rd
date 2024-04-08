import { Component } from 'react';
import PropTypes from 'prop-types';

export default class PracClass extends Component {
  render() {
    return (
      <>
        <h1>{this.props.text}</h1>
        <button
          onClick={() => {
            console.log(`${this.props.valid}`);
          }}
        >
콘솔메시지
        </button>
      </>
    );
  }
  //default값 지정
  static defaultProps = {
    text: '이건 기본 text props입니다.',
  };
}

PracClass.propTypes = {
  text: PropTypes.string.isRequired,
};
