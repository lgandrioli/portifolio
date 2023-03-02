import './App.css';
import AboutMe from './components/heroSection';
import MyTechnologies from './components/myTecnologies';
import Projects from './components/projects';

function App() {
  return (
    <div className='background_image'>
    <div className="App">
      <AboutMe/>
      <MyTechnologies/>
      <Projects/>
    </div>
    </div>
  );
}

export default App;
