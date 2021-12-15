import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ToDo from './components/todo/todo.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Settings from './context/settings/context';
import LoginProvider from './context/auth/context';
import Authrize from './context/auth/authrize';
import Control from './components/Control/Control'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from '../src/components/auth/Login';
import Register from '../src/components/auth/Register';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <LoginProvider>
          <Settings>
            <Header />
            <Switch>
              <Route exact path="/">
                {/* <Authrize> */}
                  <ToDo />
                {/* </Authrize> */}
              </Route>
              <Route path="/settings">
                {/* <Authrize> */}
                  <Control />
                {/* </Authrize> */}
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
            </Switch>
            <Footer />
          </Settings>
        </LoginProvider>
      </Router>
    );
  }
}
