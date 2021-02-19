import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Auth from './components/auth/Auth';
import { login, logout } from './_actions/auth';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/user/Profile';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const data = { email: 'j@a.com', password: 'j' };
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Auth} />
        <Route path="/signup" component={Auth} />
        <Route path="/:id" component={Profile} />
      </Switch>
    </>
  );
}

export default App;
