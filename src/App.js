import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <img
      src="/ilav.jpg"
      alt="Ilav Lunde"
      className="hero-img"
      data-aos="zoom-in"

/>
      <section id="home" className="section text-center" data-aos="fade-in">
       <h1 className="display-4">
             Hi, I'm <span className="name-highlight">Ilav Lunde</span>
        </h1>
        <p className="lead">I turn business goals into optimized systems and exceptional customer service.</p>
      </section>
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
