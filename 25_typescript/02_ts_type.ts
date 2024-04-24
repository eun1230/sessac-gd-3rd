// js에서는 없는 ts타입
console.log('-----tuple------');
// 1. tuple
// : 갯수와 데이터 타입, 순서가 정해져 있는 "배열"

let drink: [string, number]; // 첫번째 요소는 문자열, 두번째 요소는 숫자
drink = ['아메리카노', 4500];
// drink = ['라떼',true] 👉🏻 에러남 : 요소의 길이는 2, [문자열, 숫자]순서로 선언되어야 하기 때문

// 데이터 변경 시 인덱스로 접근하여 변경 가능
drink[0] = '라떼';
// drink[0] = 5100 👉🏻 정해진 타입이 아니면 수정이 불가능하다
drink.push('push?'); // push가 된다. 👇🏻
console.log(drink); // [ '라떼', 4500, 'push?' ]

// drink[3] = '수정?' 👉🏻 수정은안됨 , 타입을 미리 지정하지 않은 요소의 수정은 불가능함

// spread 연산자
console.log(...drink);

// readonly
// : 길이를 특정하고, 타입과 순서를 "완벽히" 고정시키기 위해 사용
let drink2: readonly [string, number] = ['바나나우유', 2000];
// drink2[0] = '딸기우유' 👉🏻 읽기 전용 속성이므로 '0'에 할당할 수 없다고 에러가 남, 즉 수정불가능(readonly)
// drink2.push('안됨') 👉🏻 push도 x (readonly)

//--------------------------------------------------------------------
console.log('-----enum-----');
// 2. enum
enum Auth {
  admin = 0, // 관리자 계정은 0
  user = 1, // 회원가입한 계정 1
  guest = 2, // 회원가입하지 않은 계정은 2
}
// 객체가 아님
console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);
// 객체가 아니지만 점 접근법으로 접근할 수 있다.

const userType: number = 2;
if (userType !== Auth.admin) {
  console.log('관리자 권한이 없습니다. ');
  if (userType !== Auth.user) {
    console.log('게스트 계정입니다');
  }
}
// enum값 자동할당
enum productType {
  food,
  cloth,
  shose,
}
console.log(productType.food);
console.log(productType.cloth);
console.log(productType.shose);

// 문자형 enum
enum cafe {
  americano = '아메리카노',
  latte = '라떼',
}

// enum의 경우 같은 타입으로 작성해주는 것이 좋음
enum cola {
  coke,
  pepsi,
  zero,
  sprite = '스프라이트',
}

//--------------------------------------------------------------------
console.log('-----any------');
// 3. any
// : js에서 변수를 선언하고 사용할 때와 동일하게 마음대로 값을 할당하고 수정할 수 있음
// any를 사용하는 경우 ts를 사용하는 의미가 없어지므로 any타입 사용을 지양
// 그러나 빈 배열이 필요할 때 또한 받아오는 데이터 타입이 확실하지 않을 때,
// 할당해야하는 타입을 모를 때 (외부라이브러리 사용 등) 사용하게 된다.

let myVal: any = 1;
console.log(myVal);
myVal = '문자열로 바꿈';
console.log(myVal);
myVal = [
  1,
  2,
  3,
  '배열로 바꿈',
  true,
  null,
  ['배열안 배열 등'],
  { name: 'eun', gender: 'f' },
];
console.log(myVal); // 이렇듯 any형식은 모두 추가와 수정이 가능한 형식이다.

//--------------------------------------------------------------------
console.log('-----interface------');
// 4. interface
// : 개발자가 직접 정의한 객체의 상세 타입을 interface로 선언하고 사용할 수 있다.
interface Student {
  name: string;
  isPassed: boolean; // 객체가 아니기때문에 ;로 마침
}

/* 

const student1: Student = {
  name: 'eun',
  isPassed: true,
 // age : 1 👉🏻 Student형식에 age가 없다는 에러
};

주석 처리한 이유 : 아래의 Student interface를 확장했기 때문에 age키가 없는 student1은 에러가 발생 

*/

// interface확장
// extends 키워드 없이 확장할 interface에 추가할 key와 해당 vale의 타입 작성
interface Student {
  age: number; // 위의 student1에 에러, 'age'속성이 '{name:string, isPassed:true}'형식에 없지만 'Student'형식에서 필수라고 뜬다.
}

const student2: Student = {
  name: 'eun',
  isPassed: true,
  age: 1, // 위에서 선언한 Student interface에서 age 키를 추가했기 때문에 에러가 발생하지 않고있음
};

// interface상속
// extends 키워드로 Student를 상속받아 새로운 BaseballPlayer라는 interface를 생성한 것 위에서 추가한 것과는 다름
interface BaseballPlayer extends Student {
  readonly position: string;
  height: number;
  backNumber?: number; // 있을수도 없을수도 있는 optional을 주는 "?"
}

const 류현진: BaseballPlayer = {
  name: '류현진선수',
  isPassed: true,
  age: 37,
  position: '투수',
  height: 183,
  backNumber: 1,
};
console.log(류현진);

const 이정후: BaseballPlayer = {
  name: '이정후',
  isPassed: false,
  age: 27,
  position: '외야수',
  height: 185,
  // backNumber작성하지 않아도 에러 발생하지 않음 : ?로 optional한 Key로 선언했기 때문
};
console.log(이정후);
// 이정후.position('타자'); 👉🏻 readonly키워드 때문에 수정이 불가능하다.
이정후.isPassed = true; // readonly가 없다면 수정가능함

//--------------------------------------------------------------------
console.log('----type------');
// 5. type
// : type키워드로 복잡한 타입을 type alias(타입별칭)을 정의한다. 사용자 정의 타입을 만들어준다.
// 오브젝트 뿐 만 아니라 문자열이나 숫자로 제한을 둘 수 있다.

type Score = 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';

interface HighSchoolStudent extends Student {
  // name,isPassed,age키는 이미 Student에서 상속받아 왔음
  score: Score;
  // key의 값을 해당 interface를 사용하는 객체를 선언할 때 지정하는 경우 (grade는 학년)
  // key를 지정하지 않은 상태에서 해당 key의 타입을 지정할 수 있다.
  [grade: number]: Score;
}

const 철수: HighSchoolStudent = {
  name: '철수',
  age: 17,
  isPassed: false,
  score: 'A+',
  1: 'B',
};

const 짱구: HighSchoolStudent = {
  name: '짱구',
  age: 18,
  isPassed: false,
  score: 'A+',
  2: 'B',
};
const obj2: object = {};

// name 키의 value는 무조건 string
// age키의 value는 무조건 number

// 사용자가 직접 타입을 정의할 수 있음
// interface와 type

interface Person {
  name: string;
  age: number;
}
// interface로 선언한 무언가는 앞으로 string, number, boolean과 같은 하나ㅢ 타입이 되는 것
// 개발자가 직접 만든 타입

const person1: object = {
  name: '사람1',
  age: 2,
};

const person2: Person = {
  name: '사람2',
  age: 3,
};

/*
person1의 name 과 age키의 value가 string, number타입이 아니어도 에러가 없으나
person2의 name 과 age키의 value가 string, number타입이어야 함은 interface로 선언한 키를 사용하고 있기 때문
*/

//--------------------------------------------------------------------
console.log('----함수 interface------');

interface Calc {
  // 소괄호는 해당 함수의 인자와 인자의 타입 작성
  // 소괄호 다음의 콜론에는 반환값의 타입을 작성
  (a: number, b: number): number;
}
const sum = (a, b) => {
  return a + b;
};

//return값의 타입은 소괄호 즉 인자가 작성된 소괄호 뒤에 작성, 각각의 인자의타입은 인자뒤에 작성
const sum2 = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(1, 2));
// console.log(sum(1,'2'));
// console.log(sum('1','2')); js였다면 콘솔이 '12'로 출력

//--------------------------------------------------------------------
console.log('---- type ------');
// type 사용해 객체의 타입을 지정

type Toy = {
  name: string;
  price: number;
};

const barbie: Toy = {
  name: '바비',
  price: 34000,
};

// 값을 완전 특정짓는 type생성
type Gender = 'female' | 'male';
const eun: Gender = 'female';
// type Gender = 'none' // interface처럼 확장 불가 

// 값의 타입을 제한하는 type생성
type Name = string;
const eunName: Name = 'eunbyeol';

type NumAndStr = number | string;
const numAndStrVal1: NumAndStr = 1;
const numAndStrVal2: NumAndStr = '2';

// interface vs type
/*
interface 
: 주로 객체의 타입을 지정할 때 사용
: 확장 가능 ( 그냥 interface 선언하듯이 추가 key 작성 )
: 상속 가능 ( extends 키워드 사용해tj 해당 interface 가져오고, 새로운 interface 만듦)

type 
: 훨씬 자유롭게 사용
:


*/

