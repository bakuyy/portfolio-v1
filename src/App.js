import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import React from 'react'
import { BrowserRouter} from 'react-router-dom';
import Routing from './components/routing';
// import About from './pages/About';
// import Home from './pages/Home';
// import Other from './pages/Other';
// import Projects from './pages/Projects';

function App() {
  return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routing/>
        </BrowserRouter>
      </div>

  );
}

export default App;
