import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../_actions/auth';
import { search } from '../../_actions/search';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Container,
  InputBase,
  Link,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'black',
  },
  links: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '14px',
    margin: '0 5px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  inputRoot: {
    color: '#000',
    backgroundColor: '#fff',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar({ user, setUser }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [query, setSearch] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(search(query));
    history.push(`/search/${query}`);
  };

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Container>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link href="/" className={classes.links} underline="none">
                TweTwe
              </Link>
            </Typography>
            <div className={classes.search}>
              <form onSubmit={onSubmit}>
                <InputBase
                  placeholder="Search…"
                  onChange={(e) => setSearch(e.target.value)}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </form>
            </div>
            {user?.result ? (
              <>
                <Link
                  href={`/${user.result._id}`}
                  className={classes.links}
                  underline="none"
                >
                  Profile
                </Link>

                <Button
                  color="secondary"
                  onClick={() => {
                    dispatch(logout());
                    setUser(null);
                    history.push('/signin');
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/signin" className={classes.links} underline="none">
                  Login
                </Link>

                <Link href="/signup" className={classes.links} underline="none">
                  Sign Up
                </Link>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
