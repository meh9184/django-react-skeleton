import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { observable, action, reaction } from "mobx";
import { inject, observer } from "mobx-react";

const withTimer = () => (WrappedComponent) => {
  return (
    @inject('auth')
    @observer
    class extends Component {
      @observable timerId;
      @observable remainingSecond = 3;
      @action redirectSignInPage = () => {
        const { auth, history } = this.props;

        return reaction(
          () => this.remainingSecond,
          remainingSecond => {
            if (!auth.isSignedIn && remainingSecond === 0)
              history.push('/sign-in')
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
          clearInterval(this.timerId)
      }

      render() {
        const { data } = this.state;
        return (
          <WrappedComponent {...this.props} data={data}/>
        )
      }
    }
  )
}

export default withRouter(withTimer);
