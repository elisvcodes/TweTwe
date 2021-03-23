import React, { useEffect } from 'react';
import GetUserPosts from '../posts/GetUserPosts';
import { useHistory } from 'react-router-dom';
import { logout } from '../../_actions/auth';
import { getSingleUser } from '../../_actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import ProfileHeader from './ProfileHeader';
import FollowCounter from './FollowCounter';
import { getFollowerCount, getFollowingCount } from '../../_actions/user';

export default function Profile(props) {
  const userId = props.match.params.id;
  const loggedInUser = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getSingleUser(userId));
    dispatch(getFollowerCount({ following: userId }));
    dispatch(getFollowingCount({ follower: userId }));
  }, [dispatch]);

  return (
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
            <FollowCounter />
          </Grid>
          <Grid item xs={12} sm={9}>
            <GetUserPosts id={userId} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
