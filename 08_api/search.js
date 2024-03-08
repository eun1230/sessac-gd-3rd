function displayProducts(products) {
  const productListEl = document.querySelector("#product-list");
  productListEl.innerHTML = ""; // 상품목록초기화

  products.forEach((product) => {
    const div = document.createElement("div");
    // const img = document.createElement('img'); ...
    div.innerHtml -
      `<img src='${product.image}' alt='${product.name}' />
        <p> 상품 이름 : ${product.name} , 가격 : ${product.price}원</p>`;
    productListEl.append(div);
  });
}
//상품 데이터 (Json mock)를 가져오는 함수
function fetchProducts() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayProducts(data);
    })
    .catch((error) => console.log("error : ", error));
}

fetchProducts();
