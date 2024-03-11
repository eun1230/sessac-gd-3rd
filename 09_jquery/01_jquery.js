//선택하기;
console.log($(".testSelector"));

// // 기존의 방법과 다르게 제이쿼리로 사용한 addEventListener
// // document.querySelector(".testSelector").addEventListener("click", () => {
// //   alert("클릭됨");
// // });
// // $(".testSelector").addEventListener("click", () => {
// //   alert("클릭됨");
// // });

function useVal() {
  //인자에 아무것도 전달하지 않았으므로 해당 요소의 value값을 가져온다
  const value = $("input").val();
  console.log(value);

  //기존의 가져오던 코드
  const val = document.querySelector("input").value;
  console.log(val);

  //value값 수정
  $("input").val("수정할 값 작성하기");
  // document.querySelector("input").value="수정할 값 작성하기";
}

function useAttr() {
  //attr('속성','속성값');
  //요소의 속성을 추가, 수정, 가져오기

  // placeholder를  "이름을 입력하세요" 로 변경
  $("input").attr("placeholder", "이름을 입력하세요");

  // type을  checkbox 로 변경
  $("input").attr("type", "checkbox");

  // 속성 값 가져오기
  // console.log($("input").attr("placeholder"));
}

function useText() {
  //span값 텍스트만 가져오기
  // console.log($("#sp").text());

  //요소 텍스트 수정하기
  $("#sp").text("text메소드 사용해서 수정함");

  //js의 innerText와 동일
}

function useHtml() {
  //span의 content(html)가져오기
  // console.log($("#sp").html());

  //요소 html코드 수정하기
  $("#sp").html("html메소드 사용해서 <b>수정함</b>");
}

function useCss() {
  const span = $("#sp");

  //요소 style 변경하기
  span.css("font-size", "30px");

  //documemt.querySelector('#sp').style='font-size:30px;';
}

function useAppend() {
  //container요소의 마지막 자식으로 요소 추가

  //append()
  $('.container').append(`<div class="box red"></div>`)

  //prepend()
  $(".container").prepend(`<div class="box yellow"></div>`);

  //before() : 선택된 모든 요소의 앞에 요소 추가됨, 반복문으로 돌지 않아도 모두 저장
  $(".red").before(`<div class="box orange"></div>`);
  //css선택자를 자세하게 작성해서 특정 요소만 선택할 수 있음
  $(".container .red:first-child").before(`<div class="box orange"></div>`);

  //after()
  $(".orange").after(`<div class="box green"></div>`);
}
function useRemove() {
  //첫번째 red만 삭제
  $("#red").remove();

  //모두 삭제
  $(".container").empty();
}

function useParent() {
  //parent() == 직계부모요소
  console.log("parent", $("#red").parent());

  //parents() == 부모 조상 포함 모든 상위 요소
  console.log("parents", $("#red").parents());

  //next() == 자신의 다음 형제 요소 ( nextElementSibling)
  console.log("next", $("#red").next());

  //prev() == 자신의 이전 형제 요소 (previousElementSibling)
  console.log("prev", $(".container .box:nth-child(2)").prev());

  //children() == 자신의 자식요소 (childeren)
  console.log("children", $(".container").children());
}

function changeYellow() {
  $(".container").children().css("background-color", "yellow");
}

function controlClass() {
  //addClass
  $("#controlClass").addClass("red"); // 클래스 추가

  //removeClass
  $("#controlClass").removeClass("text"); // 클래스 삭제
  $("#controlClass").removeClass(); //인자 없이 사용하면 : 모든 클래스 제거됨

  //hasClass
  console.log($("#controlClass").hasClass("red")); // red라는 클래스 갖고있는가? -> true, false

  //toggleClass
  $("#controlClass").toggleClass("red"); // red라는 클래스있으면 제거 없으면 추가
}
