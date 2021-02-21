import "./App.css";
import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'


function App() {
  return (
    <>
     <Router>
       <Switch>
       <Route exact path="/"  component={Home} />
       <Route path='/services' component={Services} />
       <Route path='/products' component={Products} />
       <Route path='/sign-up' component={SignUp} />
       </Switch>

     </Router>
      
    </>
      

    
  );
}

export default App;
