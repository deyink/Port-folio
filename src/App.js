
import './App.css';
import About from './components/About';
import { Blogs } from './components/Blogs';
import Contact  from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services'





function App() {
  return (
  
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Services/>
    <Projects/> 
   
    
    <Contact/>
    </div>
    
  );
}

export default App;
