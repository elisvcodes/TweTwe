import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../_actions/posts';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  TextField,
  makeStyles,
} from '@material-ui/core/';

const useStyles = makeStyles({
  root: {
    marginTop: '10px',
    paddingRight: '10px',
  },
});
export default function CreatePost({ user }) {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    data.author = user.result._id;
    dispatch(createPost(data));
    reset();
  };

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleClickOpen}
          color="white"
        >
          Post
        </Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
          disablePortal={true}
        >
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="article"
              label="What's On Your Mind?"
              type="text"
              fullWidth
              inputRef={register}
              multiline
              rows={8}
              autoComplete="false"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={() => {
                handleClose();
              }}
              color="primary"
            >
              Post
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </>
  );
}
