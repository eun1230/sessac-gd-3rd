// commonjs
// 한 번에 module.exports 시키기

const colors = ['pink', 'blue', 'yellow'];

const sayHi = function () {
  console.log('Hi, 이 함수는 sayHi() 함수 입니다.');
};

function sayName(name) {
  console.log(
    'my name is ' + name + '입니다. 이 함수는 sayName() 함수 입니다.'
  );
  sayHi();
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getBornYear() {
    return new Date().getFullYear() - this.age; // new.Date() -> 현재날짜, .getFullYear -> 현재 연도
  }
}

// 전부 내보내기 (변수 colors, sayName함수-> (함수 뒤 괄호 없음,sayHi가 없으나 sayName에서 호출하고 있으므로 exports에 포함하지 않아도 에러가 생기지 않음), Person이라는 클래스 까지)
module.exports = {colors, sayName, Person};