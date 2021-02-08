import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'mobx-react';
import * as serviceWorker from './serviceWorker';
import RootStore from './stores';
import './styles/index.css';
import App from './App';

const root = new RootStore();

ReactDOM.render(
  <Provider {...root}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
