import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/HomeScreen';
import Welcome from './components/WelcomeScreen';
import Main from './components/MainScreen';
import Care from './components/Care';


import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <Router >
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/welcome' component={Welcome} />
            <Route path='/main' component={Main} />
            <Route path='/hospitals' component={Care} /> 

           </Switch>
      </Router>
  );
}

export default App;
