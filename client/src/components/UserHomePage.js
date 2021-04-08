import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../_actions/posts';
import SinglePost from './posts/SinglePost';
import { Container } from '@material-ui/core';

export default function UserHomePage(props) {
  const { user } = props;
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  return (
    <>
      <Container>
        <SinglePost posts={posts} user={user} />
      </Container>
    </>
  );
}
