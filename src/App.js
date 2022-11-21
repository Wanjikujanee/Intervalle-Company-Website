
import React, { Components } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Consultants from './Components/Consultants';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Partner from './Components/Partner';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';



function App() {
  return (
<>
<BrowserRouter>
   <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Consultants/>
      <Partner/>
      <Contact/>
    </div>
    <Link to="#About">About</Link>
    </BrowserRouter>
    </>
      
  );
}

export default App;
