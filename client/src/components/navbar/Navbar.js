import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../_actions/auth';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Container,
} from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
}));

export default function Navbar({ user, setUser }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <NavLink to="/" className={classes.links}>
                TweTwe
              </NavLink>
            </Typography>
            {user?.result ? (
              <>
                <NavLink to={`/${user.result._id}`} className={classes.links}>
                  Profile
                </NavLink>

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
                <NavLink to="/signin" className={classes.links}>
                  Login
                </NavLink>

                <NavLink to="/signup" className={classes.links}>
                  Sign Up
                </NavLink>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
