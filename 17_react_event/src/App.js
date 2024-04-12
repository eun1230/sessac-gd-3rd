import './App.css';
import ClassEvent from './components/ClassEvent';
import FuncEvent from './components/FuncEvent';
import Prac1 from './components/Prac1.jsx';
import Prac2 from './components/Prac2.jsx';
import Prac3 from './components/Prac3.jsx';

function App() {
  return (
    <div className="App">
      <FuncEvent />
      <hr />
      <ClassEvent />
      <hr />
      <Prac1 />
      <hr />
      <Prac2 />
      <hr />
      <Prac3 />
    </div>
  );
}

export default App;
