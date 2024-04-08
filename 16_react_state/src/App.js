import './App.css';
import ClassState from './components/ClassState.jsx';
import FuncState from './components/FuncState.jsx';
import ClassStatePrac from './components/ClassStatePrac.jsx';
import FuncStatePrac from './components/FuncStatePrac.jsx';
import CharactorContainer from './components/CharactorContainer.jsx';

function App() {
  return (
    <div className="App">
      <ClassState />
      <FuncState />
      <ClassStatePrac />
      <FuncStatePrac />
      <CharactorContainer />
    </div>
  );
}

export default App;
