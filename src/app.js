import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ToDo from './components/todo/todo.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Settings from './context/settings/context';
import Control from './components/Control/Control'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Settings>
          <Header />
          <Switch>
            <Route exact path="/">
              <ToDo />
            </Route>
            <Route path="/settings">
              <Control />
            </Route>
          </Switch>
          <Footer />
        </Settings>
      </Router>
    );
  }
}
