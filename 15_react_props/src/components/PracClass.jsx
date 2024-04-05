import { Component } from 'react';
// import PropTypes from 'prop-types';

export default class PracClass extends Component {
  render() {
    return (
      <>
      
      {this.props.text}
      {this.props.valid}
      </>
    );
  }
}

