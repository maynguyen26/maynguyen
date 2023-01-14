import React, { Component, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import { BrowserRouter as Router,
  Routes,
  Route } from 'react-router-dom';

import Header from './components/header';
import Home from './components/pages/home';
import About from './components/pages/about';
import Experience from './components/pages/experience';

class App extends Component {

  render() { 
    
    return (
      <div style={{minHeight: "100vh", height: "100vh"}}>
        <Header/>
        <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/experience" element={<Experience/>}/>
          </Routes>
        </Router>
      </div>

    ); 
  }
}

export default App;
