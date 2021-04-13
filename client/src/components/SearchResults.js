import React, { useEffect } from 'react';
import SinglePost from './posts/SinglePost';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../_actions/search';
import { Container } from '@material-ui/core';
export default function SearchResults(props) {
  const { user } = props;
  const results = useSelector((state) => state.posts);
  return (
    <>
      <Container>
        <SinglePost posts={results} user={user} hasLink={true} />
      </Container>
    </>
  );
}
