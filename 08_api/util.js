//export키워드 : 내보내기( 자주 사용하는 함수 직접 만들어 사용하기 )
// 1. 함수 앞에 export키워드 작성
// export function consoleName(name) {
//   console.log(`당신의 이름은 ${name}`);
// }

// export function consoleName2(name) {
//   console.log(`당신의 이름은 ${name} 22222`);
// }

// // default 키워드 작성 시 해당 함수가 이 파일의 대표 함수가 됨
// export default function consoleNameMain(name) {
//   console.log(`당신의 이름은 ${name} main함수`);
// }

//2. 마지막에 모아서 export문 작성
function consoleName(name) {
  console.log(`당신의 이름은 ${name} main함수`);
}
function consoleName2(name) {
  console.log(`당신의 이름은 ${name} main함수`);
}
function consoleNameMain(name) {
  console.log(`당신의 이름은 ${name} main함수`);
}

export {consoleName, consoleName2}