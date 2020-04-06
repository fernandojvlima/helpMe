import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Logon from './pages/Logon';
import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Logon} />
        <Route path="/cases" component={Home} />
        <Route path="/register" component={Register} />
        <Route pathe="/profile" component={Profile} />

      </Switch>
    </Router>
  )
}
