import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { observable, action, reaction } from "mobx";
import { inject, observer } from "mobx-react";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import { styles } from '../../styles/commons/NotFound';

@inject('auth')
@observer
class NotFound extends Component {
  @observable timerId;
  @observable remainingSecond = 3;
  @action redirectSignInPage = () => {
    const { auth, history } = this.props;

    return reaction(
      () => this.remainingSecond,
      remainingSecond => {
        if (!auth.isSignedIn && remainingSecond === 0)
          history.push('/sign-in');
      })
  }

  constructor (props) {
    super(props);
    this.redirectSignInPage();
  }

  componentDidMount () {
    const { auth } = this.props;

    if (!auth.isSignedIn)
      this.timerId = setInterval(() => this.remainingSecond -= 1, 1000);
  }

  componentWillUnmount () {
    if (this.timerId)
      clearInterval(this.timerId);
  }

  render () {
    const { auth, classes } = this.props;

    return (
      <div>
        <Typography variant="h2" className={classes.titleTextBox}>
          404
        </Typography>
        <Typography variant="h4" className={classes.titleTextBox}>
          Not Found
        </Typography>
        {!auth.isSignedIn &&
          <Typography variant="body1" className={classes.contentTextBox}>
            <span className={classes.highlightText}> {this.remainingSecond} </span>
            초 후에 로그인 페이지로 이동합니다.
          </Typography>
        }
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(NotFound));
