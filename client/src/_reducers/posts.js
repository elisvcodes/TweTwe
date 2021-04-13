export default (posts = { result: [] }, action) => {
  switch (action.type) {
    case 'GET_USER_POSTS':
      return action.payload;
    case 'LIKEPOST':
      const result = posts.result.map((post) => {
        if (post._id === action.payload.result[0]._id) {
          return { ...post, ...action.payload.result[0] };
        } else {
          return post;
        }
      });
      return { ...posts, result };
    case 'CREATE_POST':
      return { ...posts, result: [...posts.result, action.payload] };
    case 'GET_ALL_POSTS':
      return action.payload;
    case 'GET_SINGLE_POST':
      return action.payload;
    case 'DELETE_POST':
      const afterDelete = posts.result.filter((post) => {
        return post._id !== action.payload;
      });
      return { result: afterDelete };
    case 'SEARCH_RESULTS':
      return action.payload;
    default:
      return posts;
  }
};
