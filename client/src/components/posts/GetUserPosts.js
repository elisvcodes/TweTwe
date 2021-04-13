import React, { useEffect, useState } from 'react';
import SinglePost from './SinglePost';
import { Container } from '@material-ui/core';

export default function GetUserPosts({ posts, user }) {
  return (
    <>
      <Container>
        <SinglePost posts={posts} user={user} hasLink={true} />
      </Container>
    </>
  );
}
