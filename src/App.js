import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/index'
import CreateProjects from './components/createProject/createProject'
import Login from './components/login/index'
import Profile from './components/profile/index'
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={CreateProjects} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
        <Route path='/add-new-car' component={CreateProjects} />
      </Switch>
    );
  }
}

export default App;
