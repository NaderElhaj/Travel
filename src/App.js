import "./App.css";
import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import Home from "./components/pages/Home";



function App() {
  return (
    <>
     <Router>
       <Switch>
       <Route exact path="/"  component={Home} />
       </Switch>

     </Router>
      
    </>
      

    
  );
}

export default App;
