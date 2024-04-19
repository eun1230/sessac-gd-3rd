import { Link } from 'react-router-dom';

// 상품 카드 컴포넌트
export default function ProductItem({ prod }) {
  return (
    <div className="card">
         
      {/* <h6> <Link to= {'/products/' + prod.id}> 상세 페이지로 이동 </Link> </h6> */}
      {/* <h6> <Link to= {`/products/${prod.id}`}> 상세 페이지로 이동 </Link> </h6> */}
      {/* 중괄호로 전달하는 값과 그저 문자열로 전달하는 값의 차이는 
      -> 따옴표를 사용할 때는 문자열만 있을때이고, 
      그외에는 모두 중괄호로 전달한다.(변수, 정수값, 객체는한번더{}, 등등..)*/}
      <h6>
        <Link to="prod.id"> 상세 페이지로 이동 </Link>{' '}
      </h6>
      <h4> 상품명 : {prod.name} </h4>
      <h5> 상세 설명 : {prod.body} </h5>
    </div>
  );
}
