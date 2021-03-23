import React, { useEffect, useState } from 'react';
import {
  follow,
  unfollow,
  following,
  getFollowerCount,
  getFollowingCount,
} from '../../_actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  button: {
    border: 'none',
    background: '#ef8354',
    color: 'white',
    padding: '10px 7px',
    maxWidth: '95px',
    fontSize: '12px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    '&:hover': {
      background: '#eb5e28',
      cursor: 'pointer',
    },
  },
});

export default function Follow({ user, viewingProfile }) {
  const dispatch = useDispatch();
  const isFollowing = useSelector((state) => state.follow.isFollowing);
  const [followingOption, setFollowingOption] = useState(false);
  useEffect(() => {
    dispatch(following({ following: viewingProfile._id, follower: user._id }));
    setFollowingOption(isFollowing);
  }, [dispatch, isFollowing]);
  const trackButton = () => {
    followingOption
      ? dispatch(
          unfollow({
            following: viewingProfile._id,
            follower: user._id,
          }),
          dispatch(
            getFollowerCount({
              following: viewingProfile._id,
            })
          ),
          setFollowingOption(!followingOption)
        )
      : dispatch(
          follow({
            following: viewingProfile._id,
            follower: user._id,
          }),
          dispatch(
            getFollowerCount({
              following: viewingProfile._id,
            })
          ),
          setFollowingOption(!followingOption)
        );
  };
  const classes = useStyles();

  return (
    <>
      <button onClick={trackButton} className={classes.button}>
        {followingOption ? 'unfollow' : 'follow'}
      </button>
    </>
  );
}
