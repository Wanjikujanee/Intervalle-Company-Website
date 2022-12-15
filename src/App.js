import React from 'react'; 
import Navbar from './Components/Navbar';
import Partner from './Components/Partner';
import Project from './Components/Project';
import Home from './Components/Home';
import Consultant from './Components/Consultant'; 
import Contact from './Components/Contact';
import About from './Components/About'
// import About from './Components/About';     `                                                                                                                                                                                                   `




function App(){

  return(
    <>
    
            <Navbar/>
            <Home/>
            <About/>
            <Project/>
            <Partner/>
             <Contact/>
             <Consultant/>
           
         
          </>
        
     
  );
}

export default App;
