//commonjs사용

//선언과 동시에 exports를 시키는 법
//const키워드 안씀
exports.colors2 = ['분홍', '파랑', '노랑'];
//함수
exports.sayName2 = function (name) {
  console.log('제 이름은 ' + name + '입니다. 이 함수는 sayName2함수입니다.');
};
