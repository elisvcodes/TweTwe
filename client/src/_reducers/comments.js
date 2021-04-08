export default (comments = { commentsList: [] }, action) => {
  switch (action.type) {
    case 'CREATE_COMMENT':
      console.log(action.payload);
      return {
        ...comments,
        commentsList: [...comments.commentsList, action.payload],
      };
    case 'GET_COMMENTS':
      return { ...comments, commentsList: action.payload };
    default:
      return comments;
  }
};
