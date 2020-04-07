import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewCase from './pages/NewCase';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Logon} />
        <Route path="/cases/new" component={NewCase} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  )
}
