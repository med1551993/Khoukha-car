import './style.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Models from './pages/Models';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route index path="/" element={<Home />}/>
      <Route index path="/About" element={<About />}/>
      <Route index path="/Contact" element={<Contact />}/>
      <Route index path="/models" element={<Models />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
