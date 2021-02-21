import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../_actions/user';
import { useForm } from 'react-hook-form';
export default function CreatePost() {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.author = user.result._id;
    console.log(data);
    dispatch(createPost(data));
    reset();
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
