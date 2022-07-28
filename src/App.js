import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Camp } from './pages/Camp';
import { Navbar } from './components/Navbar/Navbar';
import { Locations } from './pages/Locations';
import { Reviews } from './pages/Reviews';
import { About } from './pages/About';
import { SignUp } from './pages/SignUp';
import { Discover } from './pages/Discover';
import { useState } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Contact } from './pages/Contact';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
      console.log(isOpen)
  }

  return (
    <BrowserRouter className="App">
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/camp" element={<Camp />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
