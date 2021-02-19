import "./App.css";
import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Asba from "./components/Asba";


function App() {
  return (
    <>
     <Router>
       <Switch>
       <Route exact path="/"  component={HeroSection} />
       <Route path="/sign-up" component={Asba} />

       </Switch>
     </Router>
      
    </>
      

    
  );
}

export default App;
