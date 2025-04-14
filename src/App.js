
import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Certifications from './components/Certifications/certifications';
import WorkExperience from './components/WorkExperience/workexperience';
import Works from './components/Works/works';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Certifications/>
      <WorkExperience />
      <Works />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
