console.log(document.documentElement); // html문서내의 모든 속성(요소들)을 가져오기
console.log(document.head); //head 태그와 내부 모든 element들
console.log(document.title); // head태그 내 title
console.log(document.body); // body 태그와 내부 모든 element들
console.log(document.URL); //http, www, .. 전부 포함
console.log(document.domain); // ip주소 127.0.0.1... 우리가 아는 도메인

// 1.getElementById
console.log("getElementById");
console.log(document.getElementById("green"));
console.log(document.getElementById("gold"));

// 2.getElementsByClassName
console.log("getElementsByClassName");
console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("others"));

// 3.getElementsByTagName
console.log("getElementsByTagName");
console.log(document.getElementsByTagName("div"));

//4.querySelector
console.log("querySelector");
console.log(document.querySelector("#green"));
console.log(document.querySelector(".pink"));

//5.querySelectorAll
console.log("querySelectorAll");
console.log(document.querySelectorAll("#green"));
console.log(document.querySelectorAll(".pink"));

console.log(document.querySelectorAll(".pink")[2]);

// for of문으로 pink 클래스 모두 출력하기
console.log(" -- pink -- ");
let pink = document.querySelectorAll(".pink");
for (let el of pink) {
  console.log(el);
}
