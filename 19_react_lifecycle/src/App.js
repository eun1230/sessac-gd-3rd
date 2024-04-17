import './App.css';
import ClassLifeCycle from './components/ClassLifeCycle';
import FuncLifeCycle from './components/FuncLifeCycle';
import LifeCycle from './components/LifeCycle';
import PracContainer from './components/PracContainer';
import PracFakePost from './components/PracFakePost';

function App() {
  return (
    <div className="App">
      <ClassLifeCycle />
      <hr />
      {/* <FuncLifeCycle /> */}
      <hr />
      <PracContainer>
        <PracFakePost />
      </PracContainer>
      <hr />
      <LifeCycle />
    </div>
  );
}

export default App;

