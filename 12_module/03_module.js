//default 키워드 사용해 내보내기

//제일 마지막에 export하는 방법
// function sayStatus(status) {
//   console.log(`Now I'm ${status}.`);
// }

// export default sayStatus;

//바로 export하는 방법
export default function sayStatus2(status) {
  console.log(`Now I'm not ${status}.`);
}
