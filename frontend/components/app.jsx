import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LeadsIndex from './leads/leads_index';
import Login from './login/login_container';

const App = () => (

  <div>

    Welcome to Deal Desking
    <Switch>
      <AuthRoute exact path="/login" component={Login} />
    </Switch>
  </div>

);

export default App;
