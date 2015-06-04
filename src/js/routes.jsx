import React from 'react';
import {Route, DefaultRoute} from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

export default (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Home}/>
    <Route name="login" path="/login" handler={Login}/>
    <Route name="signup" path="/signup" handler={Signup}/>
  </Route>
);
