import React, { Component, useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import { BrowserRouter as Router,
  Routes,
  Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/pages/home';
import Explore from './components/pages/explore'
import About from './components/pages/about';
import Experience from './components/pages/experience';

class App extends Component {

  render() { 
    
    return (
      <div style={{minHeight: "100vh", height: "100vh"}}>
        <Router>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/explore" element={<Explore/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/connect" element={<About/>}/>
              <Route path="/experience" element={<Experience/>}/>
            </Route>
              <Route path="/" element={<Home/>}/>
          </Routes>
        </Router>
      </div>

    ); 
  }
}

export default App;
