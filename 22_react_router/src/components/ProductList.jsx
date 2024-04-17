import ProductItem from './ProductItem';

export default function ProductList({ prodData }) {
  return (
    <div className='prod-container'>
      {/* 체크박스,페이지네이션 */}
      {prodData.map((prod) => {
        return <ProductItem prod={prod} key={prod.id} />;
      })}
    </div>
  );
}
