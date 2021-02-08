import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { inject, observer } from "mobx-react";
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BaseDialog from './../commons/BaseDialog';

import { styles } from './../../styles/layouts/TopMenu';

@inject('auth', 'layout')
@observer
class TopMenu extends Component {
  render () {
    const { auth, layout, classes, history } = this.props;

    function handleClickOk () {
      auth.signOut()
      history.push('/sign-in')
    }

    return (
      <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: layout.drawer })}>
        <Toolbar>
          <IconButton color="inherit"
                      aria-label="open drawer"
                      onClick={layout.toggleDrawer}
                      edge="start"
                      className={clsx(classes.menuButton, { [classes.hide]: layout.drawer })}>
            <MenuIcon />
          </IconButton>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Tooltip title="Home">
              <Button component={Link} to="/" size="large" variant="outlined" color="inherit">
                {layout.topTitle}
              </Button>
            </Tooltip>

            <BaseDialog contentTitle={'로그아웃 하시겠습니까?'}
                        onClickOk={handleClickOk}
                        fullWidth={true}
                        maxWidth="sm"/>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(withStyles(styles)(TopMenu));
