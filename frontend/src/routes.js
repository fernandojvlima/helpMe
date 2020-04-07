import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Logon from './pages/Logon';
import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewCase from './pages/NewCase';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Logon} />
        <Route exact path="/cases" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/cases/new" component={NewCase} />
      </Switch>
    </Router>
  )
}
