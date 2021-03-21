import React, { useEffect, useState } from 'react';
import {
  follow,
  unfollow,
  following,
  getFollowerCount,
  getFollowingCount,
} from '../../_actions/user';
import { useDispatch, useSelector } from 'react-redux';
export default function Follow({ user, viewingProfile }) {
  const dispatch = useDispatch();
  const isFollowing = useSelector((state) => state.follow.isFollowing);
  const [followingOption, setFollowingOption] = useState(isFollowing);
  useEffect(() => {
    dispatch(following({ following: viewingProfile._id, follower: user._id }));
    setFollowingOption(isFollowing);
  });

  const trackButton = () => {
    followingOption
      ? dispatch(
          unfollow({
            following: viewingProfile._id,
            follower: user._id,
          }),
          setFollowingOption(!followingOption)
        )
      : dispatch(
          follow({
            following: viewingProfile._id,
            follower: user._id,
          }),
          setFollowingOption(!followingOption)
        );
  };

  return (
    <>
      <button onClick={trackButton}>
        {followingOption ? 'unfollow' : 'follow'}
      </button>
    </>
  );
}

{
  /* <button
onClick={() =>
  followingOption
    ? dispatch(
        unfollow({
          following: viewingProfile._id,
          follower: user._id,
        }),
        setFollowingOption(!followingOption)
      )
    : dispatch(
        follow({
          following: viewingProfile._id,
          follower: user._id,
        }),
        setFollowingOption(!followingOption)
      )
}
>
{followingOption ? 'unfollow' : 'follow'}
</button> */
}
