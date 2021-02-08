import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { styles } from '../styles/Home';

@inject('auth')
@observer
class Home extends Component {
  render () {
    const { classes } = this.props;

    return (
      <div>
        <Typography variant="h4" className={classes.titleTextBox}>
          Django React Demo
        </Typography>
        <Typography variant="body1" className={classes.contentTextBox}>
          Home 화면 입니다.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
