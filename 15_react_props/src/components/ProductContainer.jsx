import ProductItem from './ProductItem';

export default function ProductContainer({ products }) {
  console.log('productContainer컴포넌트', products);
  return (
    <div>
      {/* 
      (?) 물음표 : 만약 products라는 데이터가 없다면 실행하지 않는다 -> optional 
      products라는 props가 전달되지 않는 것 자체에는 에러가 발생하지 않지만
      products를 사용하려는 순간 에러가 발생하므로 오류방지를 위해 사용할 수 있다. 
      해당 props가 전달되었다면 체이닝 된 메소드를 사용하고 아니라면 실행하지 않는다.
      
      아래의 코드에서는 products라는 props가 전달되었다면 map메소드를 사용해 products배열을
      순회하면서 배열의 길이만큼 ProdItem을 브라우저에 렌더링 하지만 products라는 props가 전달되지 않았다면 map 메소드 자체가 동작하지 않는다.
      */}

      {products?.map((prod) => <ProductItem prodData={prod} key={prod.id} />)}

    </div>
  );
}
