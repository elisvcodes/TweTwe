import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../_actions/auth';
import { signUp } from '../../_actions/user';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export default function Auth(props) {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  let history = useHistory();

  let isJoin;
  if (props.match.path === '/signup') {
    isJoin = true;
  } else {
    isJoin = false;
  }

  const onSubmit = (data) => {
    console.log(data);
    if (!isJoin) {
      dispatch(login(data));
      setTimeout(() => {
        history.push('/');
      }, 100);
    } else {
      dispatch(signUp(data));
      setTimeout(() => {
        history.push('/');
      }, 100);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isJoin && (
          <div>
            <input
              type="text"
              name="name"
              placeholder="full name"
              ref={register}
            />
          </div>
        )}
        <div>
          <input type="email" name="email" placeholder="email" ref={register} />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            ref={register}
          />
        </div>
        {isJoin && (
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="confirm password"
              ref={register}
            />
          </div>
        )}
        <button type="submit"> {isJoin ? 'Sign Up' : 'Login'}</button>
      </form>
    </>
  );
}
