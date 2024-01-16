
import { useEffect, useState } from 'react';
import './App.css';
import Mynav from './components/Mynav';
import Preloader from './components/Preloader';
import Homepage from './pages/Homepage';
import { Route, Routes } from 'react-router';
import About from './pages/About';
import Shop from './pages/Shop';
import AOS from 'aos';
import 'aos/dist/aos.css';

document.body.classList.add("overflow-hidden")
function App() {
  useEffect(() => {
    AOS.init(
      {
         once: true,
         duration:3000,
      }
        );
      }, [])
  const [preloader, setpreloader] = useState(true)
  setTimeout(() => {
    setpreloader(false)
    document.body.classList.remove("overflow-hidden")
  }, 2000);
  return (

    <div className="App">
      {preloader&& <Preloader/>}
      <div className='bg-[url(./assets/images/herobg.webp)] bg-no-repeat lg:bg-size bg-cover bg-center'>
        <Mynav />
        
      </div>
      <Routes>
        <Route path='/' element={ <Homepage /> } />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={ <Shop /> } />
</Routes>
     
    
    </div>
  );
}

export default App;
