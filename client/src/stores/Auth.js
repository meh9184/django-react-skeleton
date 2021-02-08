import { action, observable } from 'mobx';
import axios from './../utils/axios'
import cookie from './../utils/cookie'
import { isExpired, decodeToken } from "react-jwt";

export default class AuthStore {
  @observable currentUser = {};
  @observable isSignedIn = false;
  @observable signInInput = { email: '', password: '' };

  constructor(root) {
    this.root = root;
  }

  @action signIn = () => {
    const params = {
      email: this.signInInput.email,
      password: this.signInInput.password
    };

    return axios.post('/tokens/', params)
      .then(res => {
        cookie.set('token', res.data.token, { path: '/' });

        this.currentUser = res.data.user;
        this.isSignedIn = true;
        this.signInInput = { email: '', password: '' };
      })
      .catch(err => alert(err))
  }

  @action signOut = () => {
    cookie.remove('token');
    this.isSignedIn = false;
  }

  @action verifyToken = () => {
    const token = cookie.get('token');
    if (!isExpired(token)) {
      this.isSignedIn = true;
      this.currentUser = decodeToken(token)
    }
  }
}
