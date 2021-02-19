import React from 'react';
import GetUserPosts from '../posts/GetUserPosts';

export default function Profile(props) {
  return (
    <>
      <h1> User Profile</h1>
      <GetUserPosts id={props.match.params.id} />
    </>
  );
}
