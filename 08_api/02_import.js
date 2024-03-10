// 다른 js파일의 함수나 변수를 불러와 사용하기
// import키워드와 export키워드 사용하기

// export function 함수이름(인자값){ 함수 내용 }
// 불필요한 코드 반복을 줄이고 효율적인 개발이 가능하고 유지보수도 쉬워진다.

// 함수 불러오기
import { consoleName } from "./util.js";
import { consoleName2 } from "./util.js";

// export default 키워드 작성시 중괄호 감싸지 않고 불러옴
import consoleNameMain from "./util.js";

// 한 줄로 default 함수와 다른 함수들도 불러올 수 있음
// import consoleNameMain, { consoleName, consoleName2 } from './02_util.js';

// 여러 파일들 import 할 수 있음
// import plus, { minus } from './calc.js';

consoleName("ㅇㅇ");
consoleName2("ㅇㅇ");
consoleNameMain("ㅎㅇ");
