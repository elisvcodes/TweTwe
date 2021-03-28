import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Auth from './components/auth/Auth';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/user/Profile';
import CreatePost from './components/posts/CreatePost';
import CssBaseline from '@material-ui/core/CssBaseline';
import GetSinglePost from './components/posts/GetSinglePost';

function App() {
  return (
    <>
      <CssBaseline />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Auth} />
        <Route path="/signup" component={Auth} />
        <Route path="/compose" component={CreatePost} />
        <Route
          path="/:userid/post/:postid"
          render={(props) => <GetSinglePost {...props} />}
        />
        <Route path="/:id" component={Profile} />
      </Switch>
    </>
  );
}

export default App;
