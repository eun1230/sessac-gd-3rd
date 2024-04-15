import './App.css';
import UseMemo from './components/UseMemo';
import UseCallback1 from './components/UseCallback1';
import UseCallback2 from './components/UseCallback2';
import UseReducer from './components/UseReducer';
import CustomHook from './components/CustomHook';

function App() {
  return (
    <div className="App">
      <UseMemo />
      <hr />
      <UseCallback1 />
      <hr />
      <UseCallback2 />
      <hr />
      <UseReducer />
      <hr />
      <CustomHook />
    </div>
  );
}

export default App;
