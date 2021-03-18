import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../_actions/user';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export default function CreatePost() {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  let history = useHistory();

  const onSubmit = (data) => {
    data.author = user.result._id;
    dispatch(createPost(data));
    reset();
    setTimeout(() => {
      history.push(`/${user.result._id}`);
    }, 100);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="article"
          ref={register}
          placeholder="What's on your mind?"
        />
        <button type="submit"> Submit</button>
      </form>
    </>
  );
}
