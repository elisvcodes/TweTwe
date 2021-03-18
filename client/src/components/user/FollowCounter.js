import {
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFollowerCount, getFollowingCount } from '../../_actions/user';
const useStyles = makeStyles({
  root: {
    marginTop: '10px',
    marginRight: '10px',
    padding: '5px 0',
  },
});

export default function FollowCounter({ following, follower }) {
  let followVariables = {
    following: following,
    follower: follower,
  };
  const dispatch = useDispatch();
  const follow = useSelector((state) => state.follow);

  useEffect(() => {
    dispatch(getFollowerCount(followVariables));
    dispatch(getFollowingCount(followVariables));
  }, [dispatch]);
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardActions>
          <Typography variant="body1">
            Following: {follow.followingCount}
          </Typography>
          <Typography variant="body1">
            Followers: {follow.followerCount}
          </Typography>
        </CardActions>
      </Card>
    </>
  );
}
