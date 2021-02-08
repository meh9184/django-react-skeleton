import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import ListItemText from '@material-ui/core/ListItemText';

import { styles } from '../../styles/layouts/SideMenu';

@inject('auth', 'layout')
@observer
class SideMenu extends Component {
  render () {
    const { auth, layout, classes, theme } = this.props;

    return (
      <Drawer variant="permanent"
              className={clsx(classes.drawer, {
                [classes.drawerOpen]: layout.drawer,
                [classes.drawerClose]: !layout.drawer,
              })}
              classes={{
                paper: clsx({
                  [classes.drawerOpen]: layout.drawer,
                  [classes.drawerClose]: !layout.drawer,
                })
              }}>
        <div className={classes.toolbar}>
          <ListItem>
            <ListItemText primary={auth.currentUser.email} classes={{primary: classes.authItemText}}/>
          </ListItem>
          <IconButton onClick={layout.toggleDrawer}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {layout.navigationItems.map(item => (
            <ListItem button component={Link} key={item.text} to={item.to}>
              <ListItemIcon>
                <Icon> {item.icon} </Icon>
              </ListItemIcon>
              <ListItemText primary={item.text} classes={{primary: classes.listItemText}}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
}

export default withTheme(withStyles(styles)(SideMenu));
