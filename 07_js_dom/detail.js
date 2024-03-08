const products = [
  {
    id: 1,
    name: "노트북",
    price: 1000000,
    image: "./img/laptop.jpg",
    description: "고성능 노트북입니다.",
  },
  {
    id: 2,
    name: "스마트폰",
    price: 800000,
    image: "./img/smartphone.jpg",
    description: "최신 스마트폰입니다.",
  },
  {
    id: 3,
    name: "유선키보드",
    price: 20000,
    image: "./img/keyboard.jpg",
    description: "유선 키보드입니다.",
  },
  {
    id: 4,
    name: "블루투스 키보드",
    price: 30000,
    image: "./img/bluetooth-keyboard.jpg",
    description: "사용이 편리한 무선 키보드입니다.",
  },
  {
    id: 5,
    name: "기계식 키보드",
    price: 180000,
    image: "./img/mechanical-keyboard.jpg",
    description: "소리가 매력적인 기계식 키보드입니다.",
  },
  {
    id: 6,
    name: "마우스",
    price: 50000,
    image: "./img/mouse.jpg",
    description: "편리한 이용이 가능한 마우스입니다.",
  },
  {
    id: 7,
    name: "게이밍 마우스",
    price: 80000,
    image: "./img/gaming-mouse.jpg",
    description: "게이밍용 마우스입니다.",
  },
  {
    id: 8,
    name: "32인치 모니터",
    price: 300000,
    image: "./img/monitor-32.jpg",
    description: "32인치의 모니터입니다.",
  },
  {
    id: 9,
    name: "20인치 모니터",
    price: 180000,
    image: "./img/monitor-20.jpg",
    description: "20인치의 키보드입니다.",
  },
];

console.log("detail열림");

console.log(window.location.search); //쿼리스트링 중 search만

//쿼리스트링에서 필요한 값만 쉽게 가져올 수 있는 URLSearchParams()
const urlParam = new URLSearchParams(window.location.search);
const productId = urlParam.get("id"); // .get('key') == 쿼리스트링 중 id키의 값만 뽑겠다
console.log(productId); // id값만 나옴

//상품id에 해당하는 상품 찾기
const product = products.find((p) => {
  return p.id == productId;
});

console.log(product);

//찾은 상품을 브라우저에 보여주기
const productDetail = document.querySelector("#product-detail");
if (product) {
  productDetail.innerHTML = `<img src="${product.image}" alt="${product.name}" />
<h2>${product.name}</h2>
<p> 가격 : ${product.price} 원 </p>
<p> ${product.description}</p>
`;
} else {
  productDetail.innerHTML = "<p>해당하는 상품이 없습니다.</p>";
}