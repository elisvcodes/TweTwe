import React, { useEffect } from 'react';
import GetUserPosts from '../posts/GetUserPosts';
import { useHistory } from 'react-router-dom';
import { getSingleUser } from '../../_actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import ProfileHeader from './ProfileHeader';
import FollowCounter from './FollowCounter';
import { getFollowerCount, getFollowingCount } from '../../_actions/user';
import { getUserPosts } from '../../_actions/posts';
import CreatePost from '../posts/CreatePost';
const useStyles = makeStyles({
  root: {
    marginTop: '50px',
  },
});

export default function Profile(props) {
  const { user, match } = props;
  const userId = match.params.id;
  const loggedInUser = user;
  const dispatch = useDispatch();

  const usersProfileData = useSelector((state) => state.user);
  const posts = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getSingleUser(userId));
    dispatch(getFollowerCount({ following: userId }));
    dispatch(getFollowingCount({ follower: userId }));
    dispatch(getUserPosts(userId));
  }, [dispatch]);

  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>
        <ProfileHeader
          user={loggedInUser ? loggedInUser : usersProfileData}
          viewingProfile={usersProfileData.userData}
        />
        <Grid container>
          <Grid item xs={12} sm={3}>
            <FollowCounter />
            <CreatePost user={user} />
          </Grid>
          <Grid item xs={12} sm={9}>
            <GetUserPosts posts={posts} user={user} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
