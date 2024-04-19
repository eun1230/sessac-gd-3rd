import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
export default function Home() {
  const [queryParams, setQueryParams] = useSearchParams();
  const [isDark, setIsDark] = useState(false); // 기본적으로 라이트 모드

  console.log(queryParams.get('mode'));
  /* 
  / : null
  /?mode=dark : dark
  */

  const toggleMode = () => {
    // isDark가 true라면 현재 다크모드이기 때문에 일반모드로 변경해야 함.
    // 일반모드는 루트주소(홈)
    // 만약 isDark가 false라면 라이트(일반모드)이기 때문에 다크모드로 변경해야 함. ( /?mode=dark )일때
    setQueryParams(isDark ? {} : { mode: 'dark' });
    setIsDark(!isDark);
  };

  return (
    <div style={isDark ? { backgroundColor: 'black', color: 'white' } : {}}>
      <h1>Welcome!</h1>
      <button onClick={toggleMode}>{isDark ? '라이트모드' : '다크모드'}로 전환하기</button>
    </div>
  );
}
