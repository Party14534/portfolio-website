import './App.css';
import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Resume from './components/Resume/resume';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <br/>
      <Skills/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
