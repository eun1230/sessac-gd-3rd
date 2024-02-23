let str1 = true;
let str2 = 132;
let str3 = null;

console.log(String(str1));
console.log(typeof String(str1)); // string
console.log(String(str2));
console.log(String(str3));

console.log(str1.toString()); //true
console.log(str2.toString()); //132

let n1 = true;
let n2 = false;
let n3 = "123455";
let n4 = "123.9";

console.log(Number(n1));
console.log(Number(n2));
console.log(Number(n3));
console.log(Number(n4));

console.log(typeof Number(n3)); //number

console.log(parseInt(n3));
console.log(parseInt(n4)); //소수점버림
console.log(parseFloat(n4)); //소수점 남음

// prompt("값을 입력을 받을 수 있음");

let mathScore = "77";
let engScore = "88";
let avg = (Number(mathScore) + Number(engScore)) / 2;
console.log((avg));
