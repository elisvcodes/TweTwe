export default (posts = [], action) => {
  switch (action.type) {
    case 'GET_USER_POSTS':
      return action.payload;
    case 'LIKEPOST':
      const newLikes = posts.map((post) => {
        if (post._id === action.payload._id) {
          return { ...post, ...action.payload };
        } else {
          return post;
        }
      });
      return newLikes;
    case 'CREATE_POST':
      return [...posts, action.payload];
    default:
      return posts;
  }
};
