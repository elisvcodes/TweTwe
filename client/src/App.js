import React, { useState, useEffect } from 'react';
import Auth from './components/auth/Auth';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/user/Profile';
import CreatePost from './components/posts/CreatePost';
import CssBaseline from '@material-ui/core/CssBaseline';
import GetSinglePost from './components/posts/GetSinglePost';
import Navbar from './components/navbar/Navbar';
import UserHomePage from './components/UserHomePage';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ef8354',
    },
    secondary: {
      main: '#f5b498',
    },
  },
});

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
    if (localStorage.getItem('profile')) {
      setUser(JSON.parse(localStorage.getItem('profile')));
    } else {
      setUser(null);
    }
  }, []);
  return (
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Navbar user={user} setUser={setUser} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) =>
              user ? <UserHomePage user={user.result} /> : <Home />
            }
          />
          <Route
            path="/signin"
            render={(props) => <Auth {...props} setUser={setUser} />}
          />
          <Route
            path="/signup"
            render={(props) => <Auth {...props} setUser={setUser} />}
          />
          <Route path="/compose" component={CreatePost} />
          <Route
            path="/:userid/post/:postid"
            render={(props) => <GetSinglePost {...props} user={user.result} />}
          />
          <Route
            path="/:id"
            render={(props) => <Profile {...props} user={user.result} />}
          />
        </Switch>
      </MuiThemeProvider>
    </>
  );
}

export default App;
