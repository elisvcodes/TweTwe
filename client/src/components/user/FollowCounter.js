import { Card, CardActions, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const useStyles = makeStyles({
  root: {
    marginTop: '10px',
    marginRight: '10px',
    padding: '5px 0',
  },
});

export default function FollowCounter({}) {
  const counterData = useSelector((state) => state.follow);
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardActions>
          <Typography variant="body1">
            Following: {counterData.followingCount}
          </Typography>
          <Typography variant="body1">
            Followers: {counterData.followerCount}
          </Typography>
        </CardActions>
      </Card>
    </>
  );
}
