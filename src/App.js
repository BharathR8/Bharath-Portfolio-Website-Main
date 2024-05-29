import React from 'react';
import NavBar from './components/navbar';
import About from './components/about';
import Projects from './components/projects';
//import Experience from './components/experience';
import Contact from './components/contact';
import Skills from './components/skills';

function App() {
  return (
    <main>
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;



