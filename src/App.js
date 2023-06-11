import React from 'react'

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Menu from "./pages/Menu";
import About from './components/About';
import Contact from './components/Contact';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
<Navbar />
<Routes>
  <Route path='/' exact Component={Home}></Route>
  <Route path='/menu' exact Component={Menu}></Route>
  <Route path='/about' exact Component={About}></Route>
  <Route path='/contact' exact Component={Contact}></Route>
</Routes>
<Footer />
    </Router>
    </>
  );
}

export default App;
