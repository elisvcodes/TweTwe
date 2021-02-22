import React from 'react';
import GetUserPosts from '../posts/GetUserPosts';
import { useHistory } from 'react-router-dom';
import { logout } from '../../_actions/auth';
import { useDispatch } from 'react-redux';

export default function Profile(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <>
      <h1> User Profile</h1>
      <button
        onClick={() => {
          dispatch(logout());
          setTimeout(() => {
            history.push('/');
          }, 100);
        }}
      >
        Logout
      </button>
      <button onClick={() => history.push('/compose')}>Compose</button>
      <GetUserPosts id={props.match.params.id} />
    </>
  );
}
