import "./App.css";
import React , {useState} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";


function App() {
  return (
    <>
     <Router>
      <Navbar />
        <HeroSection />
     </Router>
      
    </>
      

    
  );
}

export default App;
