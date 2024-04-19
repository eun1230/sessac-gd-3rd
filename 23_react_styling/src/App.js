import './App.css';
import BasicCss from './components/BasicCss';
import ModuleCss from './components/ModuleCss';
import Sass from './components/Sass';
// import StyledComponent from './components/Styledcomponent';

function App() {
  return (
    <div className="App">
      <BasicCss />
      <h3>module css 사용</h3>
      <ModuleCss />
      {/* <StyledComponent /> */}
      <hr />
      <Sass />
    </div> 
  );
}

export default App;
