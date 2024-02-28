/*
------------------------------------------------------------------------------------------
기본형 ( Primitive type )
------------------------------------------------------------------------------------------
1. String(문자열)
------------------------------------------------------------------------------------------
- 텍스트 정보
- 따옴표로 감싼다.
- 숫자, 특수문자, true, false 모두 따옴표 안에 있으면 문자열임
------------------------------------------------------------------------------------------
*/

const myName = "신데렐라";
const email = "glassshose@goole.com";
const gender = "female";
console.log(myName);
console.log(email);
console.log(gender);

// 문자와 변수를 동시에 사용하기
const aa = "a";
console.log(aa);

console.log("원하는 텍스트 콘솔창에 출력");

console.log(aa, "쉼표"); // 자동으로 띄어쓰기 됨
console.log(aa + "+ 연산자"); // 전부 연결해서 출력됨

const name = "hey";
console.log("안녕 나는", name, "야");
console.log("안녕 나는" + name + "야");

// 템플릿 리터럴
// 문자열 내 변수를 간결하게 표현
// 백틱(``) 기호와 달러, 중괄호(${}) 사용
console.log(`안녕 나는 ${name}야`);
const printHello = `안녕 나는 ${name}야`; // -> 문자열로 저장됨

/*
------------------------------------------------------------------------------------------
2. Number(숫자)
------------------------------------------------------------------------------------------
*/

let number = 123;
let opacity = 0.7;
let add = 1 + 2;
console.log(number, opacity, add);

/*
------------------------------------------------------------------------------------------
3. Boolean(true, false)
------------------------------------------------------------------------------------------
*/
let checked = true;
let isShow = false;
console.log(checked, isShow);

/*
------------------------------------------------------------------------------------------
4.Undefined
------------------------------------------------------------------------------------------
*/
let undef; //Undefined
console.log(undef);

let obj = {
  abc: 123,
};
console.log(obj.abc);
console.log(obj.efg); // undefined (없는 것 출력하면 undefined)

/*
------------------------------------------------------------------------------------------
5.Null
------------------------------------------------------------------------------------------
*/
let empty = null;
console.log(empty);

/*
------------------------------------------------------------------------------------------
6.Array 배열
------------------------------------------------------------------------------------------
순서가 있는 데이터의 묶음

*/

let fruits = ["apple", "orange", "banana", "grape"];
let fruits2 = new Array("apple", "orange", "banana", "grape");

console.log(fruits);
console.log(fruits2);

console.log(fruits[2]); // banana출력 : 2번 인덱스 요소 뽑아 콘솔에 찍기

console.log(fruits2[3]); // grape출력

let arr = [1, "str", false, null, undefined];
console.log(arr);

const letters = [
  "사",
  "스",
  "자",
  "크",

  "진",
  "안",
  "리",
  "이",

  "가",
  "수",
  "림",
  "나",

  "아",
  "으",
  "차",
  "운",
];

console.log(letters[12], letters[7], letters[1], letters[3], letters[10]);
const letters2 = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];
console.log(
  letters2[3][0] +
    letters2[1][3] +
    letters2[0][1] +
    letters2[0][3] +
    letters2[2][2]
);

/*
------------------------------------------------------------------------------------------
7.object 객체
------------------------------------------------------------------------------------------
배열은 순서가 있는 반면에 객체는 키-값 형태로 작성
*/

let cat = {
  name: "장화",
  age: 13,
  isCute: true,
  mew: function () {
    return "야옹";
  },
};
console.log(cat.name); //장화 출력
console.log(cat.age); // 13
console.log(cat.mew()); // 야옹
console.log("------");

console.log(cat["name"]);
console.log(cat["age"]);
console.log(cat["isCute"]);
console.log("------");

// 변경과 추가 가능
cat.like = "츄르";
console.log(cat.like);
cat.name = "홍련";
console.log(cat.name); //변경된 name

//js의 이상한 자동 형변환
let a = "3";
let b = 2;
let c = "10";

//문자 + 문자 -> 문자의 나열
console.log(a + c); // 310
console.log(c - a); // 7 -> 숫자가 되어짐
console.log(a * c); // 30 -> 숫자
console.log(c / a); //3.33333333..

//숫자 + 문자 -> 숫자가 문자열로 변환되어 문자의 나열
console.log(b + a); //23 -> 문자열이 됨
console.log(b - a); // -1 -> 문자가 숫자로 변환되어 계산됨

let introduce = {
  name: 'joeunbyeol',
  interest: ["tv", "walking", "Lp"],
  like: ["cooking", "plants"],
  isLeader: false,
  국적: "한국인",
};
console.log(introduce);
