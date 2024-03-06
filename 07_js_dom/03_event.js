const btn1 = document.querySelector(".btn-black");
const btn2 = document.querySelector(".btn-pink");
const btn3 = document.querySelector(".btn-gold");
const btn4 = document.querySelector(".btn-skyblue");

const container = document.querySelector(".container");

//익명함수, 함수 표현식 사용해 변수에 저장하지 않고 작성

btn1.addEventListener("click", function () {
  alert("버튼1을 클릭했습니다.");
});

//마우스 커서 올렸을 때
btn1.addEventListener("mouseover", function () {
  //선택된 요소 자신을 수정하고 싶은 경우 this 키워드 사용
  this.style.backgroundColor = "red";
});

//화살표함수 사용해 container에 요소 추가
btn2.addEventListener("click", () => {
  const div = document.createElement("div");
  div.style.marginBottom = "10px";
  div.style.backgroundColor = "yellowgreen";
  div.innerText = "버튼2를 클릭해 추가한 div";
  container.append(div);
});

//함수 선언해서 이벤트 등록
btn3.addEventListener("click", changeColor);
function changeColor() {
  let divs = document.querySelectorAll(".container div");

  //만약 div요소가 없다면 alert창 띄우기 예외처리
  if (divs.length !== 0) {
    for (let div of divs) {
      div.style.color = "red";
    }
    //마지막 요소만 배경색 파란색으로 변경
    divs[divs.length - 1].style.backgroundColor = "blue";
  } else {
    alert("버튼2를 클릭해 div를 추가해주세요");
  }
}

btn4.addEventListener("click", changeBtnColor);

function changeBtnColor() {
  this.style.backgroundColor = "orange";
  this.style.color = "navy";
}

//매개변수 사용 event
//scroll 이벤트는 브라우저 전체에 대해 실행되는 동작이기 때문에 어떤요소가 아닌 window에 적용
window.addEventListener("scroll", (event) => {
  //이벤트가 무엇인지 확인
  console.log(event);
  console.log(event.target); //document
  console.log(scrollY); // 스크롤이 될 때마다 (y값)위치가 찍힘

  if (scrollY > 700) {
    document.body.style.backgroundColor = "lightgray";
  }
});

//form 이벤트
const todoForm = document.querySelector("#todo-form");
const todos = document.querySelector(".todos");

todoForm.addEventListener("submit", (e) => {
  // 브라우저 상에서 기본적으로 동작하는 이벤트 동작을 제거
  e.preventDefault();
  console.log("submit");

  const todoInput = document.querySelector("input[name=todo]");
  console.log(todoInput);
  console.log(todoInput.value);

  //   todoInput.value='수정한 값' // 수정 가능

  const todo = todoInput.value;
  const newTodo = document.createElement("li");

  //   빈 문자열이 들어왔을 땐 li추가 안하기
  if (todo !== "") {
    //   newTodo.innerText = todo;
    newTodo.append(todo); // 위와 동일한 작업
    todos.append(newTodo);
    // 입력창 초기화
    todoInput.value = "";
  }
});

//변경이벤트
const changeInput = document.querySelector("#change-input");

changeInput.addEventListener("input", (e) => {
  console.log("changed");

  const div = document.querySelector(".change-input-value");
  //e : 이벤트 객체 , target : 해당이벤트가 발생한 요소 자체, value : input의 value값
  div.innerHTML = e.target.value;
});
