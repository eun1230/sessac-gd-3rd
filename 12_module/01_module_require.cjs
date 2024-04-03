//확장자 .cjs -> commonJs 버전을 실행하기 위해서 일반 자스확장자가 아니라 cjs로 사용

//01_module01.cjs 사용
// require(파일 경로)

const newPerson = require('./01_module01.cjs');

// 01_module01에서 exports한 내용들이 모두 저장됨
console.log(newPerson);
//newPerson에 저장된 변수, 함수 , 클래스 사용
console.log(newPerson.colors);
console.log(newPerson.sayName('hm'));
//클래스 사용
console.log(newPerson.Person);
const hm = new newPerson.Person('사람', '30');
console.log(hm);
console.log(hm.getBornYear());
console.log('-----------------');

//가져오고싶은 변수, 함수, 클래스만 가져오기
//sayName만 가져오겠다( 구조분해할당 사용 )
const { sayName } = require('./01_module01.cjs');
sayName('이현민');

//-------------------------------------------------
//01_module02.cjs 사용
const newPerson2 = require('./01_module02.cjs');
console.log(newPerson2.colors2);
console.log(newPerson2.sayName2('강동원'));
//구조분해
const { colors2, sayName2 } = require('./01_module02.cjs');
console.log(colors2);
console.log(sayName2('강동원'));

// 터미널에서 명령어 node 뒤 경로를 작성해주면 사용가능
// node 파일경로
