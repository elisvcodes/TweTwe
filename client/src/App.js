import React, { useState, useEffect } from 'react';
import Auth from './components/auth/Auth';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/user/Profile';
import CssBaseline from '@material-ui/core/CssBaseline';
import GetSinglePost from './components/posts/GetSinglePost';
import Navbar from './components/navbar/Navbar';
import UserHomePage from './components/UserHomePage';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SearchResults from './components/SearchResults';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ef8354',
    },
    secondary: {
      main: '#f5b498',
    },
  },
  a: {
    color: '#fff',
    textDecoration: 'none',
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
              user ? (
                <UserHomePage user={user !== 0 ? user.result : 0} />
              ) : (
                <Home />
              )
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
          <Route
            path="/search/:query"
            render={(props) => (
              <SearchResults
                {...props}
                user={user !== null ? user.result : user}
              />
            )}
          />{' '}
          <Route
            path="/:userid/post/:postid"
            render={(props) => (
              <GetSinglePost
                {...props}
                user={user !== null ? user.result : user}
              />
            )}
          />
          <Route
            path="/:id"
            render={(props) => (
              <Profile {...props} user={user !== null ? user.result : user} />
            )}
          />
        </Switch>
      </MuiThemeProvider>
    </>
  );
}

export default App;
