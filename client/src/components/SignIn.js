import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { styles } from '../styles/SignIn';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

@inject('auth')
@observer
class SignIn extends Component {
  componentDidMount () {
    document.addEventListener('keyup', this.handleKeyDown)
  }

  componentWillUnmount () {
    document.removeEventListener('keyup', this.handleKeyDown)
  }

  handleSignInClick = () => {
    const { auth, history } = this.props;

    auth.signIn().then(() => history.push('/'));
  }

  handleKeyDown = (e) => {
    const { auth, history } = this.props;

    if (e.key === "Enter")
      auth.signIn().then(() => history.push('/'));
  }

  render () {
    const { auth, classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField variant="outlined"
                       value={auth.signInInput.email}
                       onChange={(event) => {
                         auth.signInInput.email = event.target.value
                       }}
                       margin="normal"
                       fullWidth
                       id="email"
                       label="Email Address"
                       name="email"
                       autoComplete="email"
                       autoFocus/>

            <TextField variant="outlined"
                       value={auth.signInInput.password}
                       onChange={(event) => {
                         auth.signInInput.password = event.target.value
                       }}
                       margin="normal"
                       fullWidth
                       name="password"
                       label="Password"
                       type="password"
                       id="password"
                       autoComplete="current-password"/>

            <FormControlLabel control={<Checkbox value="remember" color="primary"/>} label="Remember me"/>

            <Button onClick={this.handleSignInClick}
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}>
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>

        <Box mt={8}>
          <Copyright/>
        </Box>
      </Container>
    );
  }
}

export default withRouter(withStyles(styles)(SignIn));
