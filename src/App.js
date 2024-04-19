import './App.css';
import Footer from './Footer';
import Contact from './components/Contact';
import Inro from './components/Inro';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Works from './components/Works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
