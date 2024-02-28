// 1부터 5까지 출력

let n1 = 1;

while (n1 <= 5) {
  console.log(n1);
  n1++;
}
console.log("-----------------------");

// 9부터 4까지 출력
n1 = 9;

while (n1 >= 4) {
  console.log(n1);
  n1--;
}

console.log("-----------------------");

// 1부터 10까지 짝수 출력
n1 = 1;
while (n1 <= 10) {
  if (n1 % 2 === 0) {
    console.log(n1);
  }
  n1++;
}

console.log("-----------------------");

// 10부터 1까지 홀수 출력
n1 = 10;
while (n1 >= 1) {
  if (n1 % 2 === 1) {
    console.log(n1);
  }
  n1--;
}
console.log("-----------------------");

//무한루프 : 조건식이 참이면 무한 실행 , while을 빠져나올 수없음
let n2 = 0;
while (true) {
  console.log(n2);
  n2++;
  // break; // break없다면 무한루프 또는 빠져나가야 할 조건을 설정
  // n2가 11이 되는 순간 아래의 조건이 참이되면서 while문 종료
  if (n2 > 10) break;
}
console.log("-----------------------");

n2 = 0;
//confirm : 확인 & 취소버튼이 나오는 알림창
while (confirm("계속할까요?")) {
  n2++;
  alert(`${n2}번째 알림창`);
}
