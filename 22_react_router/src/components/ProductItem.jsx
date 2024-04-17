import { Link } from 'react-router-dom';

// 상품 카드 컴포넌트
export default function ProductItem({ prod }) {
  return (
    <div className='card'>
      <h6> <Link to= {'/product/' + prod.id}> 상세 페이지로 이동 </Link> </h6>
      <h4> 상품명 : {prod.name} </h4>
      <h5> 상세 설명 : {prod.body} </h5>
    </div>
  );
}
