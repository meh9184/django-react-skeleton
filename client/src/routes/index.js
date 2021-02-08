import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { inject, observer } from "mobx-react";

import SignIn from '../components/SignIn';
import Home from '../components/Home';
import NotFound from '../components/commons/NotFound';

const requireSignIn = (auth) => (to, from, next) => {
  auth.verifyToken();

  if (auth.isSignedIn) {
    if(from.location.pathname === '/sign-in') next.redirect('/');
    next();
  }
  else next.redirect('/sign-in');
}

@inject('auth')
@observer
class Router extends Component {
  render () {
    const { auth } = this.props;

    return (
      <GuardProvider guards={[requireSignIn(auth)]} error={NotFound}>
        <Switch>
          <GuardedRoute path="/sign-in" exact component={SignIn} />
          <GuardedRoute path="/" exact component={Home} meta={{ auth: true }} />
          <GuardedRoute path="*" component={NotFound} />
        </Switch>
      </GuardProvider>
    );
  }
}

export default Router;
