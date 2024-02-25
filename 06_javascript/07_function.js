/*
----------------------------------------------- 
함수
----------------------------------------------- 
특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합
함수 정의 -> 함수 호출
함수 정의 / 선언
function name(){
    ...
}
*/

// 함수 정의

// 명시적 함수 선언
function helloWorld() {
  console.log("helloworld1");
}

helloWorld();
//함수표현식
const helloWorld2 = function () {
  console.log("helloworld2");
};

helloWorld2();
//화살표함수
const helloWorld3 = () => {
  console.log("helloworld3");
};

helloWorld3();

// return: 반환값 -> 함수 내부 코드의 "최종 결과 값";
// console.log()로 콘솔을 찍는 것에서 그치지 않고, 함수 내부 코드의 최종 결과값을 저장하고, 보관하기 위한 키워드
// -함수 블럭 안에서 return 키워드를 만나면 함수 실행 중단

// 인자없이 return 값만 가지고 있는 함수
function onePlusOne() {
  return 1 + 1;
}
//onePlusOne(); // -> 2
console.log(onePlusOne()); // console.log(2) -> 콘솔창에 2 찍음

function numPlusOne(num) {
  return num + 1;
}
console.log(numPlusOne(5)); // num =>5 5+1 -> 6을 반환

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(5, 7)); //12출력

let name = "world";

function hello(name) {
  alert(`Hello! ${name}`);
}

//연습문제1
let num1 = prompt("num1입력");
let num2 = prompt("num2입력");
function multifly(num1, num2) {
  return num1 * num2;
}
console.log(multifly(num1, num2));

//연습문제2
let num3 = prompt(" 숫자1개 입력 ");
const square = function (num3) {
  return num3 ** 2;
};
console.log(square(num3));
