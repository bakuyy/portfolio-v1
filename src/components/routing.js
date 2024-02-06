import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Other from '../pages/Other';
import Projects from '../pages/Projects';

const Routing = () => {

    // const location = useLocation()
    
  return (
      <div>
        <Routes>
            <Route path="/" exact element = {<Home/>}></Route>
            <Route path='/about' exact element={<About/>}></Route>
            <Route path="/other" exact element = {<Other/>}></Route>            
            <Route path="/projects" exact element = {<Projects/>}></Route>
        </Routes>
      </div>  
    )
}

export default Routing
