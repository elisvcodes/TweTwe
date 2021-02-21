import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Auth from './components/auth/Auth';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/user/Profile';
import CreatePost from './components/posts/CreatePost';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Auth} />
        <Route path="/signup" component={Auth} />
        <Route path="/compose" component={CreatePost} />
        <Route path="/:id" component={Profile} />
      </Switch>
    </>
  );
}

export default App;
