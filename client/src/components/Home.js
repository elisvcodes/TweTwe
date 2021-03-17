import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    minHeight: '100vh',
  },
  headerText: {
    fontWeight: 'normal',
  },
  subHeaderText: {
    fontSize: '18px',
    letterSpacing: '2px',
    lineHeight: '30px',
  },
  buttonsPosition: {
    textAlign: 'center',
    margin: '30px 0px',
  },
  buttons: {
    border: 'none',
    background: '#ef8354',
    color: 'white',
    padding: '10px 30px',
    fontSize: '15px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    '&:hover': {
      background: '#eb5e28',
      cursor: 'pointer',
    },
  },
});

export default function Home() {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem('profile')));
  let isJoined;
  if (user) {
    isJoined = true;
  } else {
    isJoined = false;
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <h1 className={classes.headerText}>Welcome to TweTwe</h1>
            <p className={classes.subHeaderText}>
              TweTwe a social media platform that allows users to share their
              opinions freely and openly.
            </p>
          </Grid>
          {isJoined ? (
            <Link to={user.result._id}>
              <button className={classes.buttons}> View Profile</button>
            </Link>
          ) : (
            <>
              <Grid item xs={12} sm={6}>
                <Grid item xs={12} sm={6} className={classes.buttonsPosition}>
                  <div>
                    <Link to="/signup">
                      <button className={classes.buttons}> Sign up</button>
                    </Link>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.buttonsPosition}>
                  <div>
                    <Link to="/signin">
                      <button className={classes.buttons}> Sign In</button>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </div>
  );
}
