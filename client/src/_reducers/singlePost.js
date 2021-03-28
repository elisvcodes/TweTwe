export default (post = {}, action) => {
  switch (action.type) {
    case 'GET_SINGLE_POST':
      return { ...post, ...action.payload };
    default:
      return post;
  }
};
