import React from 'react'; 
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About'
import Project from './Components/Project';
import Consultant from './Components/Consultant';
import Partner from './Components/Partner'; 
import Contact from './Components/Contact';








function App(){

  return(
    <>
    
            <Navbar/>
            <Home/>
            <About/>
            <Project/>
            <Consultant/>
            <Partner/>
             <Contact/>
            
           
         
          </>
        
     
  );
}

export default App;
