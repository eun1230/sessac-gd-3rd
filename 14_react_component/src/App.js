import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';

function App() {
  return (
    <div className="App">
      {/*불러와 사용하는 방법1*/}
      <ClassComponent />
      {/*불러와 사용하는 방법2*/}
      <ClassComponent></ClassComponent>

      <FunctionComponent />
      <FunctionComponent></FunctionComponent>
    </div>
  );
}

export default App;
