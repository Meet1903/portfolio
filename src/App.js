import './App.css';
import Header from './components/Header'
import TitlePage from './components/TitlePage';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import ExtraCurricular from './components/ExtraCurricular'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="App">
      <Header />
      <TitlePage />
      <main id="main">
        <About />
        <Skills />
        <Resume />
        <ExtraCurricular />
      </main>
    </div>
  );
}

export default App;