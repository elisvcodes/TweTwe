import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPosts, likePost } from '../../_actions/posts';

import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControlLabel,
  Checkbox,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons/';

dayjs.extend(relativeTime);

const useStyles = makeStyles({
  root: {
    margin: '10px 0',
    padding: '10px 0',
  },
});

export default function GetUserPosts({ id }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserPosts(id));
  }, [id, dispatch]);
  const posts = useSelector((state) => state.posts);

  const classes = useStyles();

  return (
    <>
      {posts.length === 0 ? (
        <>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">No Posts Yet</Typography>
            </CardContent>
          </Card>
        </>
      ) : (
        <>
          {posts.map((post) => {
            return (
              <div key={post._id}>
                <Card className={classes.root}>
                  <CardHeader
                    title={post.author.name}
                    subheader={
                      <p> {dayjs(post.createdAt).format('MM/DD/YYYY')}</p>
                    }
                  />
                  <CardContent>
                    <Typography variant="h6">{post.article}</Typography>
                  </CardContent>
                  <CardActions>
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite />}
                          name="checkedH"
                          onClick={() => dispatch(likePost(post._id))}
                        />
                      }
                      label={post.likes.length}
                    />
                  </CardActions>
                </Card>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
