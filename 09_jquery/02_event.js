// $(".container").click((event) => {
//   //   console.log("event", event);
//   //   console.log("event.target", event.target);

//   $(event.target).css("background-color", "skyblue");

//   // $(".container").css("background-color","skyblue");
// });

// $(".container").mouseover((event) => {
//   console.log("마우스 올라감");
// });

// $(".container").mouseout((event) => {
//   console.log("마우스 나감");
// });

//hover()
//인자로 함수 두개 작성
//첫번째 인자인 콜백함수는 mouseover일 때 실행할 코드 작성
//두번째 인자인 콜백함수는 mouseout일 때 실행할 코드 작성
$(".container").hover(
  () => {
    console.log("hover -> 마우스 올라감");
  },
  () => {
    console.log("hover -> 마우스 나감");
  }
);

//scroll
$(document).scroll(() => {
  console.log("스크롤발생");
});

///////////키보드 이벤트

// //keydown
// //인풋의 패스워드만 선택
// $("input[name=pw]").keydown((e) => {
//   console.log("event", e);
//   console.log("e.key", e.key);
//   if (e.key === "Enter") {
//     console.log("엔터를 입력했습니다");
//     console.log(e.target.value); //값 가져오기 (ex:로그인로직, 검색로직)
//   }
// });

// //keyup
// //on() : 이벤트를 걸겠다는 의미(addEventListener와 비슷함)
// $("input[name=pw]").on('keyup', (e) => {
//   console.log("e.key", e.key);
// });

//keydown
//인풋의 패스워드만 선택
$("input[name=pw]").keydown((e) => {
    if (e.key === "Enter") {
      console.log(e.target.value); 
    }
  });

