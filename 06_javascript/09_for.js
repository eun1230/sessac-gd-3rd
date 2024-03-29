for (let i = 0; i < 10; i += 3) {
  console.log(i);
}
// 1부터 5까지 1씩 증가하면서 출력하는 방법
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 5부터 1까지 1씩 증가하면서 출력하는 방법
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

console.log("-----------q------------");

let n = 10;
let result = 0;
for (let i = 1; i <= n; i++) {
  result += i; // result = result+i
}
console.log(result);
console.log("-----------------------");

let cafe = ["americano", "latte", "tea", "espresso"];
console.log(cafe.length); // 배열 길이를 출력

for (let i = 0; i < cafe.length; i++) {
  console.log("cafe menu", cafe[i]);
}

console.log("-----------------------");
//총합 구하기
let numArr = [99, 88, 77, 66, 55];
let numSum = 0;
for (let i = 0; i < numArr.length; i++) {
  numSum += numArr[i];
}
console.log("numSum :", numSum);

console.log("-----------q1------------");
//for
let i = 0;
let sum = 0;
for (i = 0; i <= 100; i++) {
  if (i % 2 == 0 || i % 5 == 0) {
    sum += i;
  }
}

console.log(sum);

//while
i = 0;
sum = 0;
while (i <= 100) {
  if (i % 2 == 0 || i % 5 == 0) {
    sum += i;
  }
  i++;
}
console.log(sum);

console.log("-----------q2------------");

for (i = 0; i <= 10000; i++) {
  if (i % 13 == 0 && i % 2 != 0) {
    console.log(i);
  }
}
console.log("-----------q2-심화-----------");

let num = prompt("수 입력");
for (i = 0; i <= num; i++) {
  if (i % 13 == 0 && i % 2 != 0) {
    console.log(i);
  }
}
console.log("-----------구구단------------");

for (let i = 1; i <= 9; i++) {
  console.log(`# ${i}단 #`);
  for (let j = 1; j <= 9; j++) {
    console.log(`${i}*${j}=${i * j}`);
  }
}

let a = prompt("숫자입력");
console.log(`-- ${a}단 --`);
for (let b = 1; b <= 9; b++) {
  console.log(`${a}*${b}=${a * b}`);
}
console.log("-----------구구단 while버전------------");

a = 1;
b = 1;
while (a <= 9) {
  console.log(`# ${a}단 #`);
  while (b <= 9) {
    console.log(`${a}*${b}=${a * b}`);
    b++;
  }
  a++;
  b = 1;
}

//1 ~ 100
let arr5 = [];
for (let i = 1; i <=100; i++) {
  arr5.push(i);
}
//for
sum = 0;
for (let i = 0; i <arr5.length; i++) {
  sum+=arr5[i];
}
console.log(sum);

//for of
sum = 0;
for (let i of arr5) {
  sum += i;
}
console.log(sum);

//for each
sum = 0;
arr5.forEach(function (i) {
  sum += i;
});
console.log(sum);