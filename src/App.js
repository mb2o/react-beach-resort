import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Single from './pages/Single';
import './App.css';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch></Switch>
      </Router>
      <Home />
      <Rooms />
      <Single />
      <Error />
    </Fragment>
  );
}

export default App;
