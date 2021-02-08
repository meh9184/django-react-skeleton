import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import TopMenu from './components/layouts/TopMenu';
import SideMenu from './components/layouts/SideMenu';

import Router from './routes/index'
import { styles } from './styles/App';

@inject('auth')
@observer
class App extends Component {
  render () {
    const { auth, classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        {auth.isSignedIn && <TopMenu />}
        {auth.isSignedIn && <SideMenu />}

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Router />
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(App);
