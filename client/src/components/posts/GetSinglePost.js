import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleUserPost } from '../../_actions/posts';
import { likePost } from '../../_actions/posts';
import { getComments } from '../../_actions/comments';

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControlLabel,
  Checkbox,
  Typography,
  Container,
  makeStyles,
} from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons/';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import CreateComment from '../comments/CreateComment';
import GetComments from '../comments/GetComments';
dayjs.extend(relativeTime);

const useStyles = makeStyles({
  comment: {
    marginTop: '10px',
  },
});

export default function GetSinglePost(props) {
  const { userid, postid } = props.match.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleUserPost(userid, postid));
    dispatch(getComments({ postId: postid }));
  }, [dispatch]);

  const post = useSelector((state) => (state.post !== {} ? state.post : ''));
  const comments = useSelector((state) => state.comments);
  const classes = useStyles();

  return (
    <>
      <Container>
        <Card>
          {Object.keys(post).length === 0 ? (
            <h6> Empty</h6>
          ) : (
            <>
              <CardHeader
                title={post.author.name}
                subheader={<p> {dayjs(post.createdAt).format('MM/DD/YYYY')}</p>}
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
            </>
          )}
        </Card>
      </Container>
      <Container className={classes.comment}>
        <Card>
          <CardContent>
            <CreateComment postId={postid} userId={userid} />
          </CardContent>
        </Card>
      </Container>
      <Container className={classes.comment}>
        <Card>
          <CardContent>
            <GetComments comments={comments} />
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
