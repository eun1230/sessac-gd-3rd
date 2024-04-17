import './App.css';
import { useState } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import Box from './components/Box';
import Profile from './components/Profile';
import AgeProvider from './components/provider/AgeProvider';
import UserProvider from './components/provider/UserProvider';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="App">
      <h1>context api 쓰는 법</h1>
      <div>
        전역적으로 접근할 수 있는 값이 있을 때 접근을 쉽게 하기 위해 사용한다.
      </div>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        {/* 여기서 value={{ isDark: isDark, setIsDark: setIsDark }}가 키와 값이 같기때문에
        이럴때는 isDark, setIsDark만 전달해도 ok */}
        ThemeContext.Provider 내부에 작성된 컴포넌트만 ThemeContext가 관리하는
        값에 접근할 수 있다.
        <Box />
      </ThemeContext.Provider>
      만약 이 ThemeContext.Provider 외부에 작성할 컴포넌트에서 value를 사용하고
      싶은 경우에는 value를 사용하는 곳부터 에러가 발생한다. context api
      사용해서 전역적으로 관리하는 값에 접근하는 컴포넌트는 재사용성이 떨어짐 👉🏻
      context api 사용하기 전 해당 사항 고려 필요
      <AgeProvider>
        <UserProvider>
          <Profile />
        </UserProvider>
      </AgeProvider>
    </div>
  );
}

export default App;
