import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Public from './components/Public';
import Private from './components/Private';
import Home from './components/home';
import PrivateRoute from './components/PrivateRoute';
import GoogleOAuth from './components/GoogleOAuth';
function App() {
  return (
    <div className="App">
      <Link to="/">Home </Link>&nbsp;&nbsp;
      <Link to="/public">Public </Link>&nbsp;&nbsp;
      <Link to="/private">Private </Link>&nbsp;&nbsp;
      <Link to="/login">GoogleOAuth</Link>&nbsp;&nbsp;
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/public" component={Public} />
        <Route path="/login" component={GoogleOAuth} />
        {/* <Route path="/private" component={Private} /> */}
        <PrivateRoute path='/private' component={Private} />
      </Switch>
      {/* <GoogleOAuth /> */}
    </div>
  );
}

export default App;
