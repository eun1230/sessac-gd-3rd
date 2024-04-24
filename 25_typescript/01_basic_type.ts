let num: number = 1;
// num = '1' // num은 무조건 number여야 된다는 뜻으로 에러 발생
num = 2;

console.log(num); // 2

let str: string = 'str';
// 타입 작성하기
let isTrue: Boolean = true;
let undef: undefined;
let empty: null = null;

//원시타입의 경우 타입 작성하지 않아도 ts가 알아서 타입을 추론
let isTrue2 = true;
let undef2;
let empty2 = null;
// isTrue2 = 'aa' // 에러 :boolean이라고 작성하지 않아도 알아서 boolean으로 추론

// array
// 요소의 "갯수를" 미리 명시할 필요는 없지만
// array의 요소가 어떤 "타입인지는" 명시 필요

// 배열의 요소가 한가지인 경우
let numArr: number[] = [1, 2, 3, 4, 5];
let strArr: Array<string> = ['가', '나', '다', '라'];

// 배열에 여러개의 타입을 작성하고 싶을 때
// number or string타입의 요소를 가진 배열
let arr1: (number | string)[] = [1, 2, 3, '가', '나', '다'];
let arr2: Array<number | string> = [1, 2, 3, '가', '나', '다'];

let arr3: (boolean | null | number[])[] = [true, null, false, [4, 22]];
let arr4: Array<boolean | null | number[]> = [true, null, false, [4, 22]];

// 어떤 자료형이든 상관없이 들어갈 수있는 배열
let arrAny: any[] = [1, 2, 'dd', null, undefined, [1, 2, 3], false];

// object
let obj1: object = {
  name: 'eun',
  gender: 'f',
};

//--------------------------------

// 타입 추론
// : 타입을 지정해주지 않아도 암묵적으로 지정해주는 것
let aa = 5;
let bb = 'hello world';
let cc = true;
let dd = null;
let ee;
// aa = '5' 👉🏻 string 형식은 number 형식에 할당할 수 없다는 에러가 출력됨
// bb = 5 👉🏻 number형식은 string 형식에 할당할 수 없다는 에러가 출력됨
// cc = 5 에러 (boolean이 아니기 때문)
// dd = 5 에러 (null이 아니기 때문)
ee = 5; // 타입을 지정하지 않고 선언만 한 변수의 경우 any타입이 자동 지정됨
ee = 'abc' // any타입을 사용하게 되면 ts를 굳이 사용하는 이유가 없기 때문에 최대한 쓰지 않는것이 좋다


