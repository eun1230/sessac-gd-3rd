import './App.css';
// import FuncProps from './components/FuncProps.jsx';
// import ClassProps from './components/ClassProps.jsx';
import FavoriteFood from './components/FavoriteFood.jsx';
import Book from './components/Book.jsx';
import PracClass from './components/PracClass.jsx';

import ProductItem from './components/ProductItem.jsx';
import ProductContainer from './components/ProductContainer.jsx';

function App() {
  const sayHi = () => {
    alert('Hello?');
  };
  const products = [
    {
      id: 1,
      name: '노트북',
      price: 1000000,
      image: './img/laptop.jpg',
      description: '고성능 노트북입니다.',
    },
    {
      id: 2,
      name: '스마트폰',
      price: 800000,
      image: './img/smartphone.jpg',
      description: '최신 스마트폰입니다.',
    },
    {
      id: 3,
      name: '유선키보드',
      price: 20000,
      image: './img/keyboard.jpg',
      description: '유선 키보드입니다.',
    },
    {
      id: 4,
      name: '블루투스 키보드',
      price: 30000,
      image: './img/bluetooth-keyboard.jpg',
      description: '사용이 편리한 무선 키보드입니다.',
    },
    {
      id: 5,
      name: '기계식 키보드',
      price: 180000,
      image: './img/mechanical-keyboard.jpg',
      description: '소리가 매력적인 기계식 키보드입니다.',
    },
    {
      id: 6,
      name: '마우스',
      price: 50000,
      image: './img/mouse.jpg',
      description: '편리한 이용이 가능한 마우스입니다.',
    },
    {
      id: 7,
      name: '게이밍 마우스',
      price: 80000,
      image: './img/gaming-mouse.jpg',
      description: '게이밍용 마우스입니다.',
    },
    {
      id: 8,
      name: '32인치 모니터',
      price: 300000,
      image: './img/monitor-32.jpg',
      description: '32인치의 모니터입니다.',
    },
    {
      id: 9,
      name: '20인치 모니터',
      price: 180000,
      image: './img/monitor-20.jpg',
      description: '20인치의 키보드입니다.',
    },
  ];
  return (
    <div className="App">
      {/* -----------------함수compo에서 props사용--------------------- */}
      {/* <FuncProps weather="sunny" feeling="happy" /> */}
      {/* defaultProps사용 */}
      {/* <FuncProps /> */}
      {/* PropTypes사용 , 문자열은 따옴표 ,그 외 다른 모든 타입은 중괄호에 감싸서 전달*/}
      {/* <FuncProps feeling="exciting" date={20240405} /> */}

      {/* 문자열 전달 */}
      {/* <FuncProps>Hello?</FuncProps> */}

      {/* 함수전달 */}
      {/* <FuncProps>{sayHi}</FuncProps> */}

      {/* 요소 전달 */}
      {/* <FuncProps>
        <div>Hello?</div>
        <div>r u tired?</div>
      </FuncProps> */}

      {/* ------------------클래스compo에서 props사용--------------------- */}
      {/* class 컴포넌트에서의 props 사용 */}
      {/* <ClassProps drink="Americano" payment="Card" price={4000} /> */}
      {/* class 컴포넌트에서의 default props, propTypes, (.isRequired까지) 사용 */}
      {/* <ClassProps drink="VanilaLatte" price="error?" /> */}

      {/* -------------------실습------------------ */}
      <FavoriteFood food="초밥" />
      <Book
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      ></Book>
      <PracClass text="Hello,!! " valid="콘솔 띄우기 성공!" />
      <PracClass valid="콘솔 띄우기 성공!" />

      {/* 상품리스트 가져와 반복으로 가져오기 */}
      {/* 해당 값들의 고유값인 id값이 필요하다는 것을 기재해야함 -> key={prod.id} */}
      {/* {products.map((prod) => (
        <ProductItem prodData={prod} key={prod.id} />
      ))} */}
      {/* 연습 develop */}
      <ProductContainer products={products}/>
      
    </div>
  );
}

export default App;
