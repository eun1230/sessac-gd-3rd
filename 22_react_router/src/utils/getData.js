// 자주 사용할 유틸함수
// url과 setState함수를 매개변수로 받아 경로에 대한 데이터를 set한다.
export const getData = (url, setState) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => setState(data));
};
