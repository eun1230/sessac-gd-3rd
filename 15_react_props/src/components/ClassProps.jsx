import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ClassProps extends Component {
  render() {
    return (
      <>
        <h1>클래스형 컴포넌트에서의 props 사용</h1>
        <div className="class-container" >
          주문하신 음료는 {this.props.drink}이고, 결제는 {this.props.payment} 로
          하시겠습니까?
        </div>
        <div>가격은 {this.props.price}원 입니다.</div>
      </>
    );
  }

  //default값 지정
  static defaultProps = {
    payment: 'Card',
    price: 8500,
  };
}

//PropTypes지정, class내부의 static으로도 선언하여 사용 가능
ClassProps.propTypes = {
  drink: PropTypes.string.isRequired,
  payment: PropTypes.string,
  price: PropTypes.number,
};
