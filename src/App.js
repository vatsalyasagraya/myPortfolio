import './App.css';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import FrontPage from './components/Frontpage';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import SkillSet from './components/SkillSet';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FrontPage/>
      <SkillSet/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
