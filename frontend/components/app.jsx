import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LeadsIndex from './leads/leads_index_container';
import Login from './login/login_container';
import Header from './header/header_container';
import TabBar from './tabbar/tabbar';
import Settings from './settings/settings_container';

const App = () => (

  <div>
    <Header />
    <Switch>
      <AuthRoute path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={TabBar} />
      <ProtectedRoute exact path="/settings" component={Settings} />
    </Switch>
  </div>

);

export default App;
