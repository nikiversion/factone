import './App.css';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import MoneyNav from './components/information/MoneyNav';
import Minitree from './components/information/Minitree';
import Flower from './components/information/Flower';
import Vintha from './components/information/Vintha';
import AntNav from './components/information/AntNav';
import RatNav from './components/information/RatNav';
import Duck from './components/information/Duck';
import Itbp from './components/information/Itbp';
import VisitCount from './components/information/VisitCount';



function App() {
  return (
    <div className="App">

  <Navbar/>
  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
         <Route path='/money' element={<MoneyNav/>}/>
         <Route path='/mini' element={<Minitree/>}/>
         <Route path='/kissa' element={<Flower/>}/>
         <Route path='/vintha' element={<Vintha/>}/>
         <Route path='/ant' element={<AntNav/>}/>
         <Route path='/rat' element={<RatNav/>}/>
         <Route path='/bathu' element={<Duck/>}/>
         <Route path='/itbp' element={<Itbp/>}/>
         
      </Routes>
      <VisitCount/>
      
    </div>
  );
}

export default App;
