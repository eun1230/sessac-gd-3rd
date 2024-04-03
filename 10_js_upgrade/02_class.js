class House {
  //constructor : 생성자함수 -> House라는 클래스의 속성을 초기화한다.
  constructor(name, age, window) {
    this.name = name;
    // 이 클래스의 name이라는 키를 가질 것이며 value는 생성자 함수에서 전달받은 name의 값(인자로 받아온 값)
    this.age = age;
    this.window = window;
  }
  consoleInfo() {
    console.log(
      `이 아파트의 이름은 ${this.name}이고, ${this.age}년 건축 되었습니다.`
    );
  }
  consoleWindow() {
    console.log(`${this.name}아파트의 창문은 ${this.window}개 입니다.`);
  }
}

const house1 = new House('고덕 그라시움', 2020, 10);

console.log(house1);
console.log(typeof house1);

//메서드를 적용하려면
house1.consoleInfo(); //이 아파트의 이름은 고덕 그라시움이고, 2020년 건축 되었습니다.

//----------------------------------------------
//상속
class Apartment extends House {
  constructor(name, age, window, floor, password) {
    super(name, age, window); //상속받을 데이터 super키워드사용해서 받아오기
    this.floor = floor;
    this.password = password;
  }
  consolePassword() {
    console.log(`이 아파트의 비밀번호는 ${this.password}입니다. 🤫`);
  }
  //오버라이딩 :( 덮어쓰는 것 ) 기존 메서드를 재정의
  consoleWindow() {
    console.log(
      `이 아파트의 창문은 모두 ${this.window}개 이고, 총 ${
        this.floor
      }층이므로 모든 창문의 갯수는 ${this.window * this.floor}입니다. `
    );
  }
}
const apart1 = new Apartment('ipark', 2017, 6, 20, 1234);
console.log(apart1);
apart1.consoleWindow();

apart1.consolePassword();

apart1.consoleInfo();

//----------------------------------------------
class Shape {
  constructor(row, column) {
    this.row = row;
    this.column = column;
  }
  getArea() {
    let result = this.row * this.column;
    return result;
  }
}
let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

//////////////////////상속/////////////////////
class Rectangle extends Shape {
  constructor(row, column) {
    super(row, column);
  }

  getLine() {
    return Math.sqrt(row) + Math.sqrt(column);
  }
}

let line = new Rectangle(3, 4);
console.log(line.getArea());


class Triangle extends Shape {
  constructor(row, column) {
    super(row, column);
  }
  getArea() {
    let result = this.row * this.column * 0.5;
    return result;
  }
}
let tri = new Triangle(3, 4);
console.log(tri.getArea());


class Circle extends Shape {
  constructor(row, column, radius) {
    super(row, column);
    this.radius = radius;
  }
  getArea() {
    let result = (this.row / 2) ** 2 * this.radius;
    return result;
  }
}

let cir = new Circle(5, 5, 3.14);
console.log(cir.getArea());
