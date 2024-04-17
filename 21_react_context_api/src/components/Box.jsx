import { useContext } from 'react';
// useContext : context에 value를 가져오는 훅이다.
import { ThemeContext } from '../contexts/ThemeContext';

export default function Box() {
  // context api 를 사용해서 전역적으로 접근할 수있는 contenxt에 접근할거라는 뜻
  //  작성되어 있는 context중 ThemeContext에 접근할것.
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <div className="container">
      <hr />
      <h2>--- Theme context사용 ---</h2>
      <div style={isDark ? { backgroundColor: '#000', color: 'white' } : {}}>
        테마 : {isDark ? '다크 모드' : '라이트모드'}
        <button onClick={() => setIsDark(!isDark)}>테마변경</button>
      </div>
      <br /> <br />
    </div>
  );
}
