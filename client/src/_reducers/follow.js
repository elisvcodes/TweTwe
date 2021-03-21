export default (
  follow = { followerCount: 0, followingCount: 0, isFollowing: false },
  action
) => {
  switch (action.type) {
    case 'GET_FOLLOWER_COUNT':
      return {
        ...follow,
        followerCount: action.payload.followerCount,
      };
    case 'GET_FOLLOWING_COUNT':
      return {
        ...follow,
        followingCount: action.payload.followingCount,
      };
    case 'FOLLOWING':
      return { ...follow, isFollowing: action.payload };
    default:
      return follow;
  }
};
