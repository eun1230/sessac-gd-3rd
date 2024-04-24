
import './App.css';
import PropsTypes from './components/PropsTypes';
import UseState from './components/UseState';
import UseRef from './components/UseRef';
import EventObj from './components/EventObj';

function App() {
  return (
    <div className="App">
      <PropsTypes name={'은별'} age={999} />
      <hr /> 전달안하고 싶은 값이 있을 때??
      <PropsTypes name={'은별'} />
      <hr />
      <UseState />
      <hr />
      <UseRef />
      <hr />
      <EventObj />
    </div>
  );
}

export default App;
