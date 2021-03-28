import React, { useState } from 'react';
import { createComment } from '../../_actions/comments';
import { useDispatch } from 'react-redux';
export default function CreateComment({ postId, userId }) {
  const [commentData, setCommentData] = useState({
    comment: '',
    postId,
    author: userId,
  });
  const dispatch = useDispatch();
  const onChange = (e) => {
    const { name, value } = e.target;
    setCommentData({ ...commentData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment(commentData));
    setCommentData({ ...commentData, comment: '' });
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="comment"
        placeholder="Add your comment"
        value={commentData.comment}
        onChange={onChange}
      />
      <button type="submit"> Submit</button>
    </form>
  );
}
