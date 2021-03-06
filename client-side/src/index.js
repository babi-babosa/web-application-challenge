import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/Navbar/NavBar';
import * as serviceWorker from './serviceWorker';
import Homepage from './Containers/Homepage/homepage';
import Revisited from './Containers/Revisited/Revisited';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

// Translations
import './i18n';

ReactDOM.render(
  <BrowserRouter>
      <Navbar />
    <Switch>
        <Route path="/revisited">
            <Revisited />
        </Route>
        <Route path="/">
              <Homepage />
        </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
