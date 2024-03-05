let div1 = document.getElementById("div1");

console.log(div1);
console.log(div1.innerText);
console.log(div1.innerHTML);

//해당 요소 내부의 텍스트 변경
div1.innerText = "여기는 첫 번째 div 태그이면서 js에서 수정이 있었습니다.";

//해당 요소 내부의 코드 변경
div1.innerHTML =
  "여기는 첫 번째 div 태그이면서 js에서 <strong>수정</strong>이 있었습니다.";

div1.innerHTML = "<ul> <li>1</li> <li>2</li> <li>3</li> <li>4</li> </ul>";

let naver = document.getElementById("naver");
console.log(naver);

//a 태그의 href속성값 가져오기
console.log(naver.getAttribute("href"));

let imgE1 = document.getElementById("pooh");
console.log(imgE1.getAttribute("src"));
console.log(imgE1.src);

//속성 수정
naver.setAttribute("href", "https://www.google.co.kr/");
imgE1.setAttribute("src", "./img/beach2.jpg");

naver.href = "https://github.com";

let flowers = document.querySelectorAll("#flower li");
for (let li of flowers) {
  //   li.style.backgroundColor = "skyblue";
  //   li.style.color = "green";

  li.classList.add("changeStyle"); // 클래스 추가
}

console.log(flowers[0].classList); // 클래스 목록 가져오기

flowers[0].classList.remove("changeStyle"); // 클래스 지우기

console.log(flowers[0].classList.contains("changeStyle")); // 클래스 가지고 있는지 여부 확인 (t, f)

flowers[0].classList.toggle("chageStyle"); // 클래스 토글하기 -> 해당 클래스가 있으면 제거 , 없으면 추가
flowers[1].classList.toggle("chageStyle"); // 클래스 토글하기 -> 해당 클래스가 있으면 제거 , 없으면 추가

// 부모자식노드
const parentE1 = document.querySelector("#flower");
const childE1 = document.querySelector("#flower .pink"); // ul > li.pink

//자식 노드 선택하기
console.log(parentE1.children);
console.log(parentE1.children[2]);
//자식요소에 접근하려면 배열 접근 방식을 따름
//자식이 하나여도 동일

console.log(childE1.parentNode); // childE1의 부모를 선택

console.log(childE1.previousElementSibling);

console.log(childE1.nextElementSibling);

// 요소 생성 추가 삭제
const container = document.querySelector(".container");
// 요소 생성
const pEl = document.createElement("p"); //p태그 생성
pEl.innerHTML = "새로만들어진p태그";
pEl.style.fontSize = "30px";
pEl.id = "append-p";
console.log(pEl);

//요소 추가
container.append(pEl);
const pEl2 = "새로 만들어진 두 번째 태그";
container.append(pEl2);

//요소 삭제


