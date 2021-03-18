import React, { useState } from 'react';
import GetUserPosts from '../posts/GetUserPosts';
import { useHistory } from 'react-router-dom';
import { logout } from '../../_actions/auth';
import { useDispatch } from 'react-redux';
import { Container, Grid } from '@material-ui/core';

export default function Profile(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useState(JSON.parse(localStorage.getItem('profile')));
  console.log(user);
  if (user[0] == null) {
    history.push('/signin');
  }
  return (
    <>
      {user && (
        <>
          <h1> User Profile</h1>
          <button
            onClick={() => {
              dispatch(logout());
              setTimeout(() => {
                history.push('/');
              }, 100);
            }}
          >
            Logout
          </button>
          <button onClick={() => history.push('/compose')}>Compose</button>
          <Container>
            <Grid container>
              <Grid item xs={12} sm={3}>
                <h1>Hello</h1>
              </Grid>
              <Grid item xs={12} sm={9}>
                <GetUserPosts id={props.match.params.id} />
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
}
