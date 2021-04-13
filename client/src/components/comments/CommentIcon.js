import React, { useEffect } from 'react';
import { Comment } from '@material-ui/icons/';
import { getNumberOfComments } from '../../_actions/comments';
import { useDispatch, useSelector } from 'react-redux';
export default function CommentIcon({ commentsLen }) {
  return (
    <>
      <Comment />
      <p> {commentsLen}</p>
    </>
  );
}
