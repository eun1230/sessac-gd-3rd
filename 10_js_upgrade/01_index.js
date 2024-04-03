// 1. 전개구문(spread)

// 1-1) 배열
const lunchMenu = ['국밥', '치킨마요', '파스타', '돈까스'];
const dinnerMenu = ['라면', '볶음밥', '된찌', '김치'];

console.log(lunchMenu);
console.log(dinnerMenu);
console.log(lunchMenu, dinnerMenu);

// 모든 배열을 하나로 만들고 싶다
//for문으로 요소 하나씩 접근하는 방법

//for문으로 요소 하나씩 접근하는 방법
for (let i = 0; i < lunchMenu.length; i++) {
  console.log(lunchMenu[i]);
}
lunchMenu.forEach((lunch) => {
  console.log(lunch);
});
//forEach와 비슷한 map
lunchMenu.map((menu) => {
  console.log(menu);
});
for (let lunch of lunchMenu) {
  console.log(lunch);
}

// 전체 요소에 접근하고 싶은 경우
// 연산(계산)등이 필요한 작업이 아닌 경우 전개 연산자 사용 (...)
console.log(...lunchMenu);
console.log(...[1, 2, 3, 4, 5]); // 꼭 변수에 저장하지 않고 배열에 바로 사용가능
console.log(...lunchMenu, ...dinnerMenu);

//요소를 하나하나에 접근이 필요할 때 합치는 법 (인덱스가 생김)
const newArr = [];

function usePush() {
  lunchMenu.map((menu) => newArr.push(menu));
  dinnerMenu.map((menu) => newArr.push(menu));
}
usePush();
console.log(newArr);

const newArr2 = lunchMenu.concat(dinnerMenu);
console.log(newArr2);

const prodData1 = [
  {
    id: 1,
    prod_name: '피크닉',
    price: 700,
  },
  {
    id: 2,
    prod_name: '딸기우유',
    price: 2000,
  },
  {
    id: 3,
    prod_name: '밀키스',
    price: 1100,
  },
];

const prodData2 = [
  {
    id: 4,
    prod_name: '고멧',
    price: 500,
  },
  {
    id: 5,
    prod_name: '쌀과자',
    price: 300,
  },
  {
    id: 6,
    prod_name: '마가렛트',
    price: 150,
  },
];

console.log(prodData1, prodData2);

const totalData = [...prodData1, ...prodData2];
console.log(totalData);

//---------------------------------------------
//1-2) 문자열
// 전개구문은 배열 뿐만 아니라 객체나 문자열에도 사용가능

const str = 'fighting!!';
console.log(...str);

const strToArr = [...str];
console.log(strToArr);

const strToArr2 = str.split(''); // 빈문자가 들어가면 모든문자가 1개씩 나누어짐
console.log(strToArr2);

//---------------------------------------------
//1-3) 객체
let me1 = {
  name: 'eb',
  height: 160,
  married: false,
  pet: null,
};
let me2 = {
  name: 'eun',
  like: ['traveling', 'idontknow'],
  pet: {
    name: '흰둥이',
    like: ['짱구', '짱아'],
  },
  greeting: function () {
    console.log(
      `안녕하세요 제 이름은 ${this.name}이고, 키는 ${this.height}cm 입니다!`
    );
  },
};

let me = { ...me1, ...me2 }; // me2의 기준으로 (뒤의 작성된) 합쳐짐
console.log(me);

// 함수는 점 표기법만 가능
me.greeting();

// 합치면서 key 추가하기
me = {
  ...me1,
  ...me2,
  status: 'hungry',
};

me = {
  ...me,
  mbti: 'infp',
};

console.log(me);

const word1 = 'abc';
const word2 = 'xyz';

const newWord3 = [...word1, ...word2];
console.log(newWord3);

const newWord4 = (word1 + word2).split('');
console.log(newWord4);

const newWord5 = word1.concat(word2).split('');
console.log(newWord5);

const newWord6 = word1.split('').concat(word2.split(''));
console.log(newWord6);

//----------------------------------------------------------------------
// 구조 분해 할당

// 2-1. 배열의 구조 분해 할당

const icecream = ['민트초코', '엔쵸', '스크류바'];
/*
지금까지
const mintchoco = icecream[0];
const ancho = icecream[1];
const screwbar = icecream[2];
*/
const [mintchoco, screwbar, ancho] = icecream;
console.log(mintchoco); // '민트초코'
console.log(ancho); // '스크류바' -> 배열에서의 구조분해 할당은 변수의 순서가 중요함

const colors = ['red', 'orange', 'yellow', 'green'];

// 중간에 변수에 담아 사용하지 않는 요소가 있는 경우 해당 순서를 생략하고 작성
const [red, oran, , green] = colors;
// console.log(yellow);

// 가장 마지막 요소를 변수에 저장하지 않을 경우 쉼표 없이 생략하면 됨
const [c1, , c3] = colors;
console.log(c1);
console.log(c3);

// 구조분해하는 배열보다 변수가 더 많은 경우 배열의 길이를 넘어가는 변수는 자동으로 undefined
const [cc1, cc2, cc3, cc4, cc5] = colors;
console.log(cc5); // undefined

// default 값 미리 선언
// default 값의 경우 해당 변수에 저장할 값이 없을 때만 사용됨
const [
  ccc1,
  ccc2,
  ccc3 = 'ccc3 default', // default 값이 사용되지 않고, colors 배열의 2번 인덱스인 'yellow'가 저장됨
  ccc4,
  ccc5 = 'ccc5 is maybe undefined', // default 값이 사용됨
] = colors;
console.log(ccc3);
console.log(ccc5);

// --------------------------------------------------

// 2-1-1. 배열을 사용해 변수 교환
let value1 = 'second';
let value2 = 'first';

let temp; // 임시로 사용되는 값을 위한 변수 temp (terporary의 약자)

// 변수의 값 교환
temp = value1; // -> temp 변수의 값은 'first'
value1 = value2; // -> value1 변수의 값은 'second'
value2 = temp; // -> valsue2 변수의 값은 'first'

console.log(value1, value2); // first, second

// 구조 분해 할당을 이용해 변수 값 교환
value1 = 'second';
value2 = 'first';

[value2, value1] = [value1, value2];
// [value2, value1] = ['first', 'second'];
console.log(value1, value2); // first, second

// --------------------------------------------------

// 2-2. 객체의 구조 분해 할당
const myPhone = {
  name: '아이폰',
  color: 'white',
  version: 13,
};

// 각 요소에 접근
console.log(myPhone.name); // 점 접근법
console.log(myPhone['name']); // 대괄호 접근법
// console.log(name); // error

/*
// 기존 방법
const name = myPhone.name;
const color = myPhone.color;
const version = myPhone.version;

console.log(name, color, version);
*/

// 구조 분해 할당
// 순서에 상관없이 구조 분해 할당하는 객체의 key와 동일한 변수에 값이 저장
const { color, name, version } = myPhone;

console.log(name, color, version);

// 다른 이름으로 변수를 할당할 수 없음
const { c, n, v } = myPhone;
console.log(c, n, v); // undefined undefined undefined -> key와 변수가 동일해야 해당하는 변수에 값이 저장되기 때문

// 다른 이름으로 변수를 할당하려는 경우
const { name: nn, color: cc, version: vv } = myPhone;
console.log(nn, cc, vv);

// key가 존재하지 않는 경우를 대비해 default 값 지정하기
const { name: nnn, color: ccc, giga: ggg = 256, version: vvv } = myPhone;
console.log(nnn, ccc, ggg, vvv);

// 전개 연산자 추가 사용 예시
const { key1, key5, ...obj } = {
  key1: 'value1',
  key2: 2,
  key3: 'value3',
  key4: 'value4',
  key5: 5,
};
console.log(key1); // 'value1'
console.log(key5); // 5
console.log(obj); // key1과 key5를 제외한 key-value 쌍이 모두 obj 변수에 저장

//----------------------------------------------------------------------
// 함수에서 전개연산자와 구조분해 할당 , default값 지정

function test(...val) {
  const [v1, v2, v3, v4 = '없음', ...rest] = val;

  console.log(v1);
  console.log(v2);
  console.log(v3);
  console.log(v4);
  console.log(rest);
}

// test(1,2,3,4,5,6,7,8);
test(1, 2, 3);

// 매개변수 갯수 제한하지 않고 모든 매개변수의 합을 구하는 함수
function addTotal(...val) {
  console.log(val);
  let sum = 0;
  val.forEach((v) => {
    sum += v;
  });
  console.log(sum);
  return sum;
}

addTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//----------------------------------------------------------------------
// 매개변수에 기본값 설정
function introduce(name, like = 'money', hate, gender) {
  console.log(
    `안녕하세요 제 이름은 ${name}이고, 저는 ${like}를 좋아하고 ${hate}을 싫어합니다, 저는 ${gender}입니다.`
  );
}

introduce(); // 적은개수의 인자는 Undefined
introduce(1, 2, 3, 4, 5, 6, 7, 8, 9); //넘치는 인자는 문제가 없다
// introduce(1,,2); // 함수 내부에는 인자를 빈채로 둘 수 없음 기본값을 보고싶다면 undefined로 준다
introduce(1, 2, undefined, 3);
