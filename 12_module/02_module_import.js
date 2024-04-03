//import는 es6부터 사용하기때문에 .js확장자 그대로 사용

//package.json 수정 필요 type->module

// 02_module02.js사용
// 한번에 export한 변수, 함수 등을 가져오는 방법
// 편하긴 하지만 메모리 효율이 떨어지고 처리 속도 측면에서 좋지 않다.
// 이러한 실행환경이 좋지 않기 때문에 되도록이면 자주 사용하지 않는다. 너무 많은 양을 가져와야할 때는 어쩔 수 없긴하다.

// import * as flower from './02_module01.js';
// console.log(flower);

// 02_module01.js사용
import { flowers, getFlower, getFlowersLength } from './02_module01.js';

console.log(flowers);
getFlowersLength();
console.log(getFlower(0));
console.log(getFlower(10));

console.log('-----------------');

import { animals, showAnimals, addAnimal } from './02_module02.js';

console.log(animals);
console.log(showAnimals());
console.log(addAnimal('panda'));

console.log('-----------------');
//03_module 가져오기 (default)
// import sayStatus from './03_module.js';
// sayStatus('hungry');
// sayStatus('hard');
// sayStatus('happy');

import sayStatus2 from './03_module.js';
sayStatus2('hungry');
sayStatus2('hard');
sayStatus2('happy');
