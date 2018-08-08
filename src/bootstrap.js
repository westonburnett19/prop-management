import React from '../../.cache/typescript/2.9/node_modules/@types/react';
import ReactDOM from '../../.cache/typescript/2.9/node_modules/@types/react-dom';
import { Provider } from '../../.cache/typescript/2.9/node_modules/@types/react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter , Route, Switch} from '../../.cache/typescript/2.9/node_modules/@types/react-router-dom';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

//import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import Signin from './components/signin';
import Signup from './components/signup';
import HeaderWrapper from './components/header';
import Layout from './components/layout';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Layout>
          <Route path='/' exact component={Signin}/>
          <Route path='/' component={Signin}/>
          <Route path='/' component={Signup}/>
          </Layout>
        </Switch>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
