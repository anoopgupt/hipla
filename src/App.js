import React from 'react';
import './App.css';
import SignIn from './components/signIn';
import SignUp from './components/Signup';
import Header from './components/header/headerComponent';
import SideBar from './components/sidebar/sidebar';
import AllReports from './components/allReports';
import CreateNewRequest from './components/createNewRequest';
import Dashboard from './components/dashboard';
import Meetings from './components/meetings';


import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function App() {
  return (
    <div className="main">
      <Router>
        <Route exact path="/" >
          <SignIn />  
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/header">
          <Header />
        </Route>

        {/* <Route exact path="/dashboard">
          <Dashboard />
        </Route> */}
      </Router>
        
    </div>
  );
}

export default App;
