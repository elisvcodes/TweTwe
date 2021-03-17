import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../_actions/auth';
import { signUp } from '../../_actions/user';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Container, makeStyles, TextField } from '@material-ui/core';

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
                name="password"
                placeholder="Password"
                inputRef={register}
                variant="outlined"
              />
            </div>
          )}
          <button className={classes.button} type="submit">
            {' '}
            {isJoin ? 'Sign Up' : 'Login'}
          </button>
        </form>
      </Container>
    </>
  );
}
