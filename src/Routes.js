import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import NotFound from './containers/NotFound';
import './containers/NotFound.css';
import Login from './containers/Login';
import './containers/Login.css';
import AppliedRoute from './components/AppliedRoute';

export default ({ childProps }) => (
    <Switch>
      <AppliedRoute path="/" exact component={Home} props={childProps} />
      <AppliedRoute path="/login" exact component={Login} props={childProps} />
      <Route component={NotFound} />
    </Switch>
  );