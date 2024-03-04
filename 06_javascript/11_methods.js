///////////////// string method  ///////////////

let str = "Strawberry Moon";
let str2 = "   Strawberry Moon   ";

//문자열 인덱싱 : Sonny
console.log(str[0] + str[12] + str[14] + str[14] + str[9]);

//length -> 속성 : 괄호가 없는 함수가 아닌 속성이다. 길이를 구하는 속성
console.log(str.length);
console.log(str2.length);

//인자가 없는 메소드 : xx.method()형태
let msg = "Happy Birthday!!!";
let userId = "           user123";

console.log(msg.toUpperCase());
console.log(msg.toLowerCase());

console.log(userId.length); //17
console.log(userId.trim());
console.log(userId.trim().length); // 7: 공백 제거되었는지 확인

//인자가 있는 메소드 : xx.method(arg)형태
let fruit = "appleMango";

console.log(fruit.slice(5)); //Mango
console.log(fruit.slice(3, 6)); //leM
console.log(fruit.slice(-1)); //ngo

console.log(fruit.charAt(8)); //g
console.log(fruit.charAt(5)); //M

console.log(fruit.indexOf("apple")); // 0
console.log(fruit.indexOf("mango")); // 5
console.log(fruit.indexOf("e")); //4
console.log(fruit.indexOf("z")); //-1

let msg2 = "Wow! It's so amazing!!!";
console.log(msg2.replace("Wow", "Oh")); // Oh! It's so amazing!!!
console.log(msg2.replaceAll("Wow", "Oh"));

console.log("HelloWorld".repeat(10)); //HelloWorldHelloWorldHelloWorldHelloWorldHelloWorld..

let today = "2024.02.28";

console.log(today.split(".")); //인자로 받은 문자열을 기준으로 나누어 배열로 반환
console.log(today.split("")); //모든 글자를 하나씩 나누어 배열로 반환

console.log(today.replaceAll(".", "-"));

///////////////// array method  ///////////////

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["dog", "cat", "panda", "penguin"];
arr1[5] = 6;
console.log(arr1); //[1, 2, 3, 4, 5, 6]
arr1[7] = 8;
console.log(arr1); //[1, 2, 3, 4, 5, 6, empty, 8]

arr1 = [1, 2, 3, 4, 5];
console.log(arr1.push(10));
console.log(arr1.push(20));
console.log(arr1.push(30));
console.log(arr1); //[1, 2, 3, 4, 5, 10, 20, 30]

arr1 = [1, 2, 3, 4, 5, 10, 20, 30];
arr1.pop();
arr1.pop();
arr1.pop();
console.log(arr1); //[1, 2, 3, 4, 5]

arr2 = ["dog", "cat", "panda", "penguin"];
// 맨 앞 요소 추가
arr2.unshift("bear");
console.log(arr2); //['bear', 'dog', 'cat', 'panda', 'penguin']
// 맨 앞 요소 삭제
arr2.shift("bear");
console.log(arr2); //['dog', 'cat', 'panda', 'penguin']

arr2 = ["dog", "cat", "panda", "penguin"];
console.log(arr2.includes("cat")); // true (포함하고있는지?)

arr2 = ["dog", "cat", "panda", "penguin"];
console.log(arr2.indexOf("panda")); // 2

arr2 = ["dog", "cat", "panda", "penguin"];
console.log(arr2.length); // 4

arr2 = ["dog", "cat", "panda", "penguin"];
console.log(arr2.reverse()); // ['penguin', 'panda', 'cat', 'dog']

arr2 = ["dog", "cat", "panda", "penguin"];
console.log(arr2); // ['dog', 'cat', 'panda', 'penguin']
console.log(arr2.join()); // dog,cat,panda,penguin -> 인자를 작성하지 않으면 배열안의 콤마(,)까지 문자열로변환
console.log(typeof arr2.join()); // string

console.log(arr2.join("")); //dogcatpandapenguin -> 빈문자열 작성 시 모든 요소가 붙어서 하나의 문자열로 변환
console.log(arr2.join(" 그리고 ")); //dog 그리고 cat 그리고 panda 그리고 penguin

console.log(arr2); // ['dog', 'cat', 'panda', 'penguin'] -> join은 원본을 변화시키지않음

///////////////// array 반복문  ///////////////

let arr3 = [1, 2, 3, 4, 5];
//for
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

arr3 = [1, 2, 3, 4, 5];
//for of
for (let number of arr3) {
  //arr3의 요소들을 number로, 반복
  console.log(number);
}

alphabets = ["a", "b", "c", "d", "e", "f"];
for (let alpha of alphabets) {
  console.log(alpha);
}

arr3 = [1, 2, 3, 4, 5];
arr3.forEach(function (num, idx) {
  console.log("num : ", num);
  console.log("idx : ", idx);
});

let arr4 = [1, 2, 3, 4, 5];
let arr_filter = arr4.filter(function (a) {
  return a > 3;
});
console.log(arr_filter); // [4, 5]

arr4 = [1, 2, 3, 4, 5];

let val_find = arr4.find(function (a) {
  return a > 3;
});
console.log(val_find); //4

arr4 = [1, 2, 3, 4, 5];

let arr_map = arr4.map(function (b) {
  return b + 3;
});
console.log(arr_map); //[4, 5, 6, 7, 8]

arr2 = ["dog", "cat", "panda", "penguin"];
//arr2의 요소 중 길이가 5자 이상인 요소만 모아 새로운 배열 만들기
let newArr2 = arr2.filter(function (animal) {
  return animal.length >= 5;
});
console.log(arr2); //['dog', 'cat', 'panda', 'penguin']
console.log(newArr2); //['panda', 'penguin']

let words = ["hello", "nice", "to", "meet", "you", "too"];
//word의 요소 중 첫번째 글자가 t 또는 두번째 글자가 o인 단어
const newWords = words.filter(function (hi) {
  return hi.charAt(0) === "t" || hi.charAt(1) === "o";
});
console.log(words); //['hello', 'nice', 'to', 'meet', 'you', 'too']
console.log(newWords); //['to', 'you', 'too']

//화살표함수로 filter
let newArr3 = arr2.filter((animal) => {
  return (animal.length = 5);
});

//화살표함수에서 return까지 생략
newArr3 = arr2.filter((animal) => (animal.leㅜgth = 5));

words = ["hello", "nice", "to", "meet", "you", "too"];
let findResult = words.find(function (hi) {
  return hi.charAt(0) === "t"; // 'to'만 반환
});
console.log(words); //['hello', 'nice', 'to', 'meet', 'you', 'too']
console.log(findResult); // to

let nums = [1, 2, 3, 4, 5];
let mapArr = nums.map(function (n) {
  return n * 100;
});
console.log(nums); //[1, 2, 3, 4, 5]
console.log(mapArr); //[100, 200, 300, 400, 500]

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