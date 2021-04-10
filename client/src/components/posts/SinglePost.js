import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useDispatch } from 'react-redux';

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
import CommentIcon from './CommentIcon';

import SinglePostData from './SinglePostData';
dayjs.extend(relativeTime);

const useStyles = makeStyles({
  root: {
    margin: '10px 0',
    padding: '10px 0',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
});

export default function SinglePost({ posts, user }) {
  console.log(posts);
  const classes = useStyles();
  const dispatch = useDispatch();
  const checkId = posts.map((post) => post.likes.includes(user._id));

  return (
    <>
      {posts.length !== 0 ? (
        <>
          {posts.map((post, index) => {
            return (
              <Card key={post._id} className={classes.root}>
                <Link
                  to={`/${post.author._id}/post/${post._id}`}
                  className={classes.link}
                >
                  <SinglePostData post={post} />
                </Link>
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
                        onClick={() => dispatch(likePost(post._id))}
                      />
                    }
                    label={post.likes.length}
                  />
                  <CommentIcon commentsLen={post.comments.length} />
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
