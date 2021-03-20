import React, { useState, useEffect } from 'react';
import GetUserPosts from '../posts/GetUserPosts';
import { useHistory } from 'react-router-dom';
import { logout } from '../../_actions/auth';
import { getSingleUser } from '../../_actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import ProfileHeader from './ProfileHeader';
import FollowCounter from './FollowCounter';

export default function Profile(props) {
  const userId = props.match.params.id;
  const loggedInUser = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getSingleUser(userId));
  }, [dispatch]);

  return (
    <>
      {user && (
        <>
          <h1> User Profile</h1>
          <button
            onClick={() => {
              dispatch(logout());
              setTimeout(() => {
                history.push('/signin');
              }, 300);
            }}
          >
            Logout
          </button>
          <button onClick={() => history.push('/compose')}>Compose</button>
          <Container>
            <ProfileHeader
              user={loggedInUser ? loggedInUser.result : user.userData}
              viewingProfile={user.userData}
            />
            <Grid container>
              <Grid item xs={12} sm={3}>
                <FollowCounter
                  follower={props.match.params.id}
                  following={props.match.params.id}
                />
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
