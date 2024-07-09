import './App.css';
import Header from './components/Header';
import TitlePage from './components/TitlePage';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import ExtraCurricular from './components/ExtraCurricular';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    const toggleMobileNav = (e) => {
      document.body.classList.toggle('mobile-nav-active');
      e.currentTarget.classList.toggle('bi-list');
      e.currentTarget.classList.toggle('bi-x');
    };

    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggle) {
      mobileNavToggle.addEventListener('click', toggleMobileNav);
    }

    return () => {
      if (mobileNavToggle) {
        mobileNavToggle.removeEventListener('click', toggleMobileNav);
      }
    };
  }, []);

  return (
    <div className="App">
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
      <Header />
      <TitlePage />
      <main id="main">
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
