if (5 > 3) {
  console.log("5는 3보다 크다");
}
if (5 > 7) {
  console.log("조건이 false이므로 이 코드블럭 실행 x");
}

let num = Number(prompt("숫자를 입력해주세요"));
if (num > 10) {
  console.log("입력받은 수는 10보다 큰 경우(true)");
} else {
  console.log("입력받은 수가 10보다 작은경우에만 실행(false)");
}

if (num > 10) {
  console.log("입력받은 수는 10보다 큰 경우(true)");
} else if (num === 10) {
  console.log("입력받은 수가 10입니다.");
} else {
  console.log("입력받은 수가 10보다 작은경우 실행 ");
}

const score = Number(prompt("성적을 입력해주세요"));
if (score > 100) {
  //100점보다 큰 수가 입력되었을 때
  console.log("잘못 입력되었습니다.");
} else if (score >= 90) {
  //90점 이상 -> A
  console.log("A");
} else if (score >= 80) {
  //80점 이상 -> B
  console.log("B");
} else if (score >= 70) {
  //70점 이상 -> C
  console.log("C");
} else if (score >= 60) {
  //60점 이상 -> D
  console.log("D");
} else {
  //60점 미만 -> F
  console.log("F");
}

const age = Number(prompt("나이 입력"));
if (age >= 20) {
  console.log("성인");
} else if (age >= 17) {
  console.log("고등학생");
} else if (score >= 14) {
  console.log("중학생");
} else if (score >= 8) {
  console.log("초등학생");
} else if (score >= 0) {
  console.log("유아");
}

const userId = "user01";
const userPw = "1234qwer";

function loginUser() {
  const inputId = prompt("아이디를 입력해주세요");
  if (userId == inputId) {
    const inputPw = prompt("비밀번호를 입력해주세요");
    if (userPw == inputPw) {
      console.log("login success");
      alert(`안녕하세요 ${inputId}님`);
    } else {
      console.log("login failed");
      alert("비밀번호가 틀렸습니다.");
    }
  } else {
    console.log("login failed");
    alert("아이디가 존재하지 않습니다.");
  }
}

loginUser();

let number = 10;
switch (number / 10) {
  case 10:
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B");
    break;
  case 7:
    console.log("C");
    break;
  case 6:
    console.log("D");
    break;
  default:
    console.log("F");
}

// 삼항연산자로 변환

num % 2 === 1 ? "홀수" : "짝수";

let fruit = "banana";
console.log(fruit === "바나나" ? "바나나" : "바나나가 아닙니다");

let isLoggedIn = true;
isLoggedIn === true
  ? console.log("로그인 유저입니다.")
  : console.log("로그인하지 않은 유저입니다.");

let now = new Date().getHours;
console.log(now >= 0 && now <= 12 ? "오전": "오후");


