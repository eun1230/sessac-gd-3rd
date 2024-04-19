import { useNavigate, useParams } from 'react-router-dom';

export default function ProductDetail() {
  const tempProductsData = [
    {
      id: 1,
      name: '다이슨 슈퍼소닉',
      email: 'Eliseo@gardner.biz',
      body: '다이슨 슈퍼소닉 헤어드라이어를 위한 자석 부착형 스타일링 노즐, 스탠드 및 스타일링 액세서리.',
    },
    {
      id: 2,
      name: 'SSD 1TB',
      email: 'Jayne_Kuhic@sydney.com',
      body: '삼성전자 삼성 외장SSD T7 1TB 외장하드 1테라 USB3.2 Gen.2 Type-C MU-PC1T0 공식인증 (정품)',
    },
  ];

  //리액트에서 가져오는 훅이아니라 react-router-dom에서 가져오는 useParams, useNavigate
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();

  const { productId } = useParams();

  //filter : 배열을 순회하는 것과 같이, 값을 처음부터 마지막까지 순회하며 원하는 값을 통과한 요소로만 필터링한다
  const [result] = tempProductsData.filter(
    // tempProductsData의 요소를 prod로 지정, prod의 아이디값이 productId(useParams)로 가져온 값과 같은지
    // 필터링 하고, productId는 숫자인 것 같지만 문자열이기 때문에 형변환을 해주어야 함
    (prod) => prod.id === Number(productId)
  );
  console.log(result); // [{...}] -> result는 파라미터로 받은 id의 상품정보가 담긴 객체가 배열에 감싸져 있다.
  // 구조분해할당하여 바로 객체를 변수에 저장하기 위해서 const [result]로 선언해준다
  if (!result)
    return (
      <>
        <h1>존재하지 않는 상품입니다.</h1>
        <button onClick={() => navigate('/')}>홈으로</button>
        <button onClick={() => navigate('/products')}>상품목록페이지로</button>
      </>
    );

  return (
    <>
      <div className='detail-box'>
        상품 상세페이지 입니다.<br/>
        <button onClick={() => navigate('/')}>홈으로</button>
        <button onClick={() => navigate('/products')}>목록으로</button>
        {/* -1은 브라우저의 뒤로가기의 버튼과 동일한 동작을 한다. 이전의 주소값으로 이동하는 것 */}
        <button onClick={() => navigate(-1)}>뒤로가기</button>
        <h3>상품명 : {result.name}</h3>
        <h5>판매자정보 :{result.email}</h5>
        <h4>상세정보 : {result.body}</h4>
      </div>
    </>
  );
}
