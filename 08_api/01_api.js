//간단한 비동기 코드 예시
//순서는 1,3,2
//setTimeout은 해당 시간동안 코드가 실행을 멈추는 것이 아니라 setTimeout과 다음줄에 작성된 코드가 모두 실행되고 있는 것
//하지만 setTimeout의 두 번째 인자인 ms시간이 지난 뒤 setTimeout 내부의 코드를 실행하는 것
// console.log("hi 1");

// setTimeout(() => {
//   console.log("hi 2");
// }, 1000);

// console.log("hi 3");
// ///////////////////////////////////////////////////////////
// // 비동기 코드를 동기적으로 또는 원하는 순서대로 실행시키고 싶다면
// // 동기적으로 실행할 부분을 콜백함수 내부에 작성하면 된다
// console.log("hi 1");

// setTimeout(() => {
//   console.log("hi 2");
//   console.log("hi 3");
// }, 1000);
///////////////////////////////////////////////////////////
// 사용자에게 아이디를 입력받고 비동기적으로 서버 통신을 흉내내는 로그인 로직
// const id = prompt("아이디를 입력해주세요.");
// let userId;
// console.log("로그인 시도");
// //서버통신부분
// setTimeout(() => {
//   userId = "eun01"; // 서버에서 받아온 Id로 가정
//   console.log("서버에서 아이디 성공적으로 받아옴");
// }, 2000); // 예상시간 2초

// if (id === userId) {
//   console.log("로그인 성공");
// } else {
//   console.log("로그인 실패");
// }
///////////////////////////////////////////////////////////
//정상적으로 입력받은 id와 서버에서받아온 userId를 비교하는 코드
// const id2 = prompt("아이디를 입력해주세요.");
// let userId2;
// console.log("로그인 시도");
// //서버통신부분
// setTimeout(() => {
//   userId2 = "eun01"; // 서버에서 받아온 Id로 가정
//   if (id2 === userId2) {
//     console.log("로그인 성공");
//   } else {
//     console.log("로그인 실패");
//   }
//   console.log("서버에서 아이디 성공적으로 받아옴");
// }, 1000); // 예상시간 2초
///////////////////////////////////////////////////////////
//promise를 사용해 비동기 처리를 구현하는 예시
// const id = "eun";
// let userId;
// const promise = new Promise((resolve, reject) => {
//   console.log("Promise 시작");

//   setTimeout(() => {
//     userId = "eun01"; // 서버에서 아이디 받아옴
//     if (userId === id) {
//       resolve(userId);
//     } else {
//       reject(new Error("아이디가 틀렸습니다. 다시 입력해주세요."));
//     }
//   }, 2000);
// });
// promise
//   .then((data) => {
//     console.log(`userId는 ${data}입니다.`);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("promise 종료");
//   });

///////////////////////////////////////////////////////////
// const id = "eun01"; //성공
// // const id = "eun"; //실패
// let userId;
// //promise를 함수에 담아 해당 함수 호출 시 Promise가 실행되도록 작성
// const promiseFunc = () => {
//   return new Promise((resolve, reject) => {
//     console.log("promise 시작");
//     //서버에서 데이터 받아오는 시간 대체
//     setTimeout(() => {
//       userId = "eun01";
//       if (userId === id) {
//         resolve(userId + "님 로그인 성공");
//       } else {
//         reject(new Error("아이디가 틀렸습니다."));
//       }
//     }, 2000);
//   });
// };
// //promiseFunc가 실행될 때 까지 멈춰있겠다는 뜻
// const checkUserId = async () => {
//   try {
//     const result = await promiseFunc();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("promise 종료");
//   }
// };

// checkUserId();
///////////////////////////////////////////////////////////
//json
// [
//   {
//     'name': "장화",
//     'age': 13,
//     'Employed': true,
//     'position': "이사",
//     'address': {
//       'gu': "마포구",
//       'city': "서울시",
//     },
//   },
// ];

const jsonString =
  '{"name":"장화","age":13,"isEmployed":true,"position": "이사", "address":{"gu":"마포구","city":"서울시"}}';
console.log(jsonString.name); //js 객체 처럼 바로 사용할 수 없음
//json -> js객체로 파싱하기
const obj = JSON.parse(jsonString);
console.log(obj);
console.log(obj.name); //장화

//js 객체 -> json
const jsonStr = JSON.stringify(obj);
console.log(jsonStr);

///////////////////////////////////////////////////////////
//openAPI사용

//고양이 사진 가져오기
fetch("https://api.thecatapi.com/v1/images/search")
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    console.log(data);
    const img = document.createElement("img");
    img.src = data[0].url;
    img.setAttribute("width", "500px");
    document.querySelector("#cat").append(img);
  });

///////////////////////////////////////////////////////////
//omdb api 사용해 영화 데이터 받아와 브라우저에 보여주기

async function getMovieData() {
  const h3 = document.querySelector("h3");
  const ul = document.querySelector("ul");

  let word = "love";
  h3.innerText = `검색된 키워드 : ${word}`;
  const response = await fetch(
    `api-key값&s=${word}`
  );
  const movieData = await response.json(); //json으로 바꾸기
  console.log(movieData.Search); //확인해보기

  //불러온 데이터는 movieData.Search 배열 안에 각각의 객체로 있음
  //movieData.Search 배열을 반복문을 통해 돌아서 각 요소를 만들고 DOM에 추가한다.
  for (let movie of movieData.Search) {
    const div = document.createElement("div"); // 영화 카드 컨테이너
    const img = document.createElement("img"); // 영화 포스터
    const p = document.createElement("p"); // 영화 제목

    img.src = movie.Poster;
    img.alt = movie.Title;
    p.innerText = movie.Title;

    div.append(img, p);
    ul.append(div);
  }
}

///////////////////////////////////////////////////////////
console.log("--------------------------------------");
//JsonPlaceholder API 사용해 가짜 데이터로 CRUD 작업하기
//JsonPlaceholder : json 형태의 mock data(더미 데이터)를 주는 open API

//get 요청 : 특정 게시물을 가져오는 함수
const getPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

//post 요청 : 게시글 등록하는 함수 (데이터 보내기)
const postPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      // json형태를 객체형태로
      title: "제목",
      body: "게시글 내용",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8", // 내가 지금 보내고 있는 타입이 json형태라는 뜻, (유니코드UTF-8)
    },
  })
    .then((response) => response.json())
    .then((data) =>
      // 브라우저에 렌더링 등 응답으로 받은 데이터를 사용
      console.log(data)
    )
    .catch((error) => {
      //에러 발생 시 원하는 에러 처리
      console.log("error: ", error);
    });
};

//delete :삭제
const deletePost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "Delete",
  })
    .then((response) => response.json())
    .then((data) => console.log("Delete 성공"))
    .catch((err) => console.log("Delete Error : ", err));
};

///////////////////////////////////////////////////////////
