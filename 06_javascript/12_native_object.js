//현재 날짜
let now = new Date();
console.log(now);

//1000ms === 1s
//1000ms * 60 * 60 === 1s * 60 * 60 = 1h
//100ms * 3600 * 24 === 24h

//1970년 1월 1일 기준으로 해당 ms만큼 지난 시간
let Jan_1970 = new Date(1000 * 3600 * 24);
console.log(Jan_1970);

// new date(year, month, day, hour, minutes, seconds, ms)
console.log(new Date(2021, 2, 15, 18, 30, 15));

// Date객체 메서드
// 연, 월, 일, 등의 값을 얻을 수 있음
console.log(now.getFullYear()); // 연도(4자리) ex) 2024
console.log(now.getFullYear() + "년"); //2024년
console.log(now.getMonth()); // 월
console.log(now.getDate()); // 일
console.log(now.getDay()); // 요일 (1(월)~7(일))
console.log(now.getTime()); //시간
console.log(now.getHours()); //시
console.log(now.getMinutes()); //분
console.log(now.getSeconds()); //초
console.log(now.getMilliseconds()); //ms


day = now.getDay();
console.log(day);

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("평일");
    break;
  case 6:
  case 7:
    console.log("주말");
    break;
}


console.log(Math.E) //자연로그
console.log(Math.PI) //파이 3.14....
console.log(Math.SQRT2) // 2의 제곱근

console.log(Math.min(10,2,5,-50)) //최소값
console.log(Math.max(10,2,5,-50)) //최대값

console.log(Math.random()) // 0 ~ 1 사이의 난수 생성

console.log(Math.round(3.4)) // 반올림 3
console.log(Math.floor(3.4)) // 소수점 이하 버림 3
console.log(Math.ceil(3.4)) // 올림 4


let boxE1 = document.querySelector(".box");
console.log(boxE1);

let boxE1s = document.querySelectorAll(".box");
console.log(boxE1s);





