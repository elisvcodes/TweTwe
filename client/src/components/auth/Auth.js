import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, signUp } from '../../_actions/auth';
import { useForm } from 'react-hook-form';
import { Container, makeStyles, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: '100vh',
  },
  form: {
    '& .MuiFormControl-root': {
      margin: '5px 0',
    },
  },

  button: {
    marginTop: '10px',
    border: 'none',
    background: '#ef8354',
    color: 'white',
    padding: '10px 30px',
    fontSize: '15px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    '&:hover': {
      background: '#eb5e28',
      cursor: 'pointer',
    },
  },
});

export default function Auth(props) {
  const { setUser, match } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  let isJoin;
  if (match.path === '/signup') {
    isJoin = true;
  } else {
    isJoin = false;
  }

  const onSubmit = (data) => {
    if (!isJoin) {
      dispatch(login(data, history, setUser));
    } else {
      dispatch(signUp(data, history, setUser));
    }
  };

  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          {isJoin && (
            <div>
              <TextField
                type="text"
                name="name"
                placeholder="Full Name"
                inputRef={register}
                variant="outlined"
              />
            </div>
          )}
          <div>
            <TextField
              type="email"
              name="email"
              placeholder="Email"
              inputRef={register}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              type="password"
              name="password"
              placeholder="Password"
              inputRef={register}
              variant="outlined"
            />
          </div>
          {isJoin && (
            <div>
              <TextField
                type="password"
                name="confirmPassword"
                placeholder="Password"
                inputRef={register}
                variant="outlined"
              />
            </div>
          )}
          <button className={classes.button} type="submit">
            {isJoin ? 'Sign Up' : 'Login'}
          </button>
        </form>
      </Container>
    </>
  );
}
