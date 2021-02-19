import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPosts, likePost } from '../../_actions/user';

import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export default function GetUserPosts({ id }) {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserPosts(id));
  }, [id, dispatch]);
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <p> {dayjs(post.createdAt).format('DD/MM/YYYY')}</p>
            <p> {post.author.name}</p>
            <h1> {post.title}</h1>
            <p> {post.article}</p>
            <button onClick={() => dispatch(likePost(post._id))}>
              Like {post.likes.length}
            </button>
          </div>
        );
      })}
    </>
  );
}
