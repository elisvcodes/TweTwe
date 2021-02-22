import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem('profile')));
  let isJoined;
  if (user) {
    isJoined = true;
  } else {
    isJoined = false;
  }

  return (
    <>
      <h1>{isJoined ? `Welcome ${user.result.name}` : `Welcome to TweTwe`}</h1>
      {isJoined ? (
        <Link to={user.result._id}>
          <button> View Profile</button>
        </Link>
      ) : (
        <>
          <div>
            <Link to="/signup">
              <button> Sign up</button>
            </Link>
          </div>
          <div>
            <Link to="/signin">
              <button> Sign In</button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
