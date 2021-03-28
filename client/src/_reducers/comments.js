export default (comments = [], action) => {
  switch (action.type) {
    case 'CREATE_COMMENT':
      return [...comments, action.payload];
    case 'GET_COMMENTS':
      return action.payload;
    default:
      return comments;
  }
};
