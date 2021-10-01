import React from 'react'
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Services from './components/pages/Services';

import SignIn from './components/SignIn/SignIn';
import Contact from './components/pages/Contact';



const App = () => {
  return (
    <>
      <Router>

       
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/contactus' component={Contact} />
          <Route path='/signin' component={SignIn} />
        </Switch>

      </Router>
    </>
  );
}

export default App;
