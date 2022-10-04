import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './globalStyles';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router basename='/'>
      <GlobalStyle/>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="Contact" element = {<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
