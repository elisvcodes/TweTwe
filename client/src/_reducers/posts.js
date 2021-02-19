export default (posts = [], action) => {
  switch (action.type) {
    case 'GET_USER_POSTS':
      return action.payload;
    case 'LIKEPOST':
      console.log(posts);
      const newLikes = posts.map((post) => {
        if (post._id === action.payload._id) {
          return { ...post, ...action.payload };
        } else {
          return post;
        }
      });
      return newLikes;

    default:
      return posts;
  }
};
