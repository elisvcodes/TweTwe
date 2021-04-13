import React, { useState } from 'react';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardActions,
  FormControlLabel,
  Checkbox,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons/';
import { likePost } from '../../_actions/posts';
import CommentIcon from '../comments/CommentIcon';

import SinglePostData from './SinglePostData';
dayjs.extend(relativeTime);

const useStyles = makeStyles({
  root: {
    margin: '10px 0',
    padding: '10px 0',
  },
});

export default function SinglePost({ posts, user, commentsLen, hasLink }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const checkId = user
    ? posts.result.map((post) => post.likes.includes(user._id))
    : 0;
  return (
    <>
      {posts.result.length !== 0 ? (
        <>
          {posts.result.map((post, index) => {
            return (
              <Card key={post._id} className={classes.root}>
                <SinglePostData post={post} hasLink={hasLink} />
                <CardActions>
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={
                          checkId[index] ? (
                            <Favorite color="primary" />
                          ) : (
                            <FavoriteBorder color="secondary" />
                          )
                        }
                        checkedIcon={
                          checkId[index] ? (
                            <Favorite color="primary" />
                          ) : (
                            <FavoriteBorder color="secondary" />
                          )
                        }
                        name="checkedH"
                        onClick={() => {
                          if (user === null) {
                            history.push('/signin');
                          } else {
                            dispatch(likePost(post._id));
                          }
                        }}
                      />
                    }
                    label={post.likes.length}
                  />
                  <CommentIcon
                    commentsLen={
                      commentsLen !== undefined
                        ? commentsLen
                        : post.comments.length
                    }
                  />
                </CardActions>
              </Card>
            );
          })}
        </>
      ) : (
        <>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">No Posts Found</Typography>
            </CardContent>
          </Card>
        </>
      )}
    </>
  );
}
