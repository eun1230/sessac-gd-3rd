/* 브라우저의 처음렌더링이 되었을 때에 -> 
모든 컴포넌트가 다 렌더링 되고 나서 ->
타이틀이라는 값을 바꿔주는 "함수" */

import { useEffect } from 'react';

export default function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title; // html문서의 원본 title태그를 미리 저장
    document.title = title; // document.title에 매개변수로 받은 title을 저장

    return () => {
      document.title = prevTitle;
      // 미리 저장했던 원래의 title로 다시 return , 컴포넌트 종료할 때 돌려놔야하기 때문
    };
  }, [title]);
}

/*
useTitle은 title이라는 매개변수를 받는 커스텀 훅이다.
새로운 컴포넌트가 마운트되고, 해당 컴포넌트에서 useTitle훅을 호출하는동시에
변경하고자하는 title을 매개변수로 전달받아 해당 title로 document.title의 content로 바꾸어준다.
useEffect 내부에 title이 변경되면 document.title을 매개변수로 받은 title로 변경을해주고
사용한 컴포넌트가 unmount되면 return에서 원래값으로 되돌려 놓는다. (클린업함수)

useTitle 커스텀 훅사용


*/
