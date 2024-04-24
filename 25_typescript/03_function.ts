// 1. 리턴값이 없는 함수 - void
function consoleString(str: string): void {
  console.log(str);
}
// 리턴값이 있다면 void타입선언 불가, string으로 지정
function returnString(str: string): string {
  return str;
}

//--------------------------------------------------------

// optional한 인자
console.log('----------optional한 인자------------');

function tsPrint(a: number, b?: number): void {
  console.log(a);
  console.log(b);
}
tsPrint(1, 2);

tsPrint(3); // 두번째 인자를 보내지 않았지만 만약 tsPrint의 b 뒤에 ?를 주었기 때문에 에러 발생이 없음

// 함수 다른 방식으로 선언하기
// 방법 1.
function myfunc(): void {
  console.log('function 키워드 사용한 함수');
}
//방법2.
const myfunc2 = (a: number): void =>
  console.log('함수 표현식으로 작성한 함수', a);

myfunc();
myfunc2(2);

// interface에서 함수
interface Greet {
  name: string;
  hi(): void; // hi 함수는 호출시 hi라는 문자열을 콘솔에 찍고, 리턴값 x
  bye(str: string): string; // bye함수는 문자열을 매개변수로 받고 해당 문자열을 리턴해주기 때문에 함수의 타입이 string으로 작성
}

const myfunc3: Greet = {
  name: 'eun',
  hi() {
    console.log('hi');
  },
  bye(str: string): string {
    return `bye, ${str}`;
  },
};

myfunc3.hi();
myfunc3.bye('eun');

//--------------------------------------------------------

// never
// : 함수의 끝에 절대 도달하지 않는 경우에만 never 할당 가능 ( 무한 루프 )

// function neverEnd(): never {
//   while (true) {
//     console.log('무한루프');
//   }
// } -> 무한루프이기 때문에 never키워드 가능

function neverEnd(a: number) {
  while (true) {
    console.log('무한루프');
    if (a > 5) break;
  }
}
neverEnd(1); // 1이 무한루프 되긴하지만 종료조건의 if문이 있기 때문에 하나의 가능성이 있으므로 never사용 x
neverEnd(10); // 인자로 받을 a가 5를 초과하기 때문에 함수 멈춤, 이는 무한루프가 아니기 때문에 never작성 불가 

/*
--------------------------------------------------------
인자의 타입은 함수 선언 시 인자에 바로 할당
함수의 타입 
리턴값이 있으면 : 해당 리턴값의 타입은 인자를 받는 소괄호 뒤에 작성하고
리턴값이 없으면 : void타입으로 작성해준다,
무한루프 함수라면 : never타입으로 작성해준다. 
--------------------------------------------------------
*/

