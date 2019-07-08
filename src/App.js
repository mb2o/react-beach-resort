import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Error from './pages/Error';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Single from './pages/Single';

import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={Single} />
        <Route component={Error} />
      </Switch>
    </Fragment>
  );
}

export default App;
