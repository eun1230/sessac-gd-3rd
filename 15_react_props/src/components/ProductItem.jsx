//바로 구조분해 할당하여 가져옴 , productList의 prodData만가져온 것
export default function ProductItem({ prodData }) {
  console.log('productItem컴포넌트', prodData);
  return (
    <div className="prod-container">
      <div> 제품명 : {prodData.name}</div>
      <div> 가격 : {prodData.price}</div>
      <div> 설명 : {prodData.description}</div>
    </div>
  );
}
