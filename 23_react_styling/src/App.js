import './App.css';
import BasicCss from './components/BasicCss';
import ModuleCss from './components/ModuleCss';
import StyledComponent from '../components/StyledComponent';

function App() {
  return (
    <div className="App">
      <BasicCss />
      <h3>module css 사용</h3>
      <ModuleCss />
      <StyledComponent />
    </div>
  );
}

export default App;
