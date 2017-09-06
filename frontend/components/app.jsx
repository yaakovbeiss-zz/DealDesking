import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Login from './login/login_container';
import Header from './header/header_container';
import TabBar from './tabbar/tabbar';
import LeadsIndex from './leads/leads_index_container';
import QuotesIndex from './quotes/quotes_index_container';
import Settings from './settings/settings_container';


const Tabs = TabBar([LeadsIndex, 'Leads'], [QuotesIndex, 'Quotes'])

const App = () => (

  <div>
    <Header />

    <Switch>
      <AuthRoute path="/login" component={Login} />
      <ProtectedRoute path="/" component={Tabs} />
      <ProtectedRoute exact path="/settings" component={Settings} />
    </Switch>
  </div>

);

export default App;
