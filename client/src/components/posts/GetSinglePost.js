import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleUserPost } from '../../_actions/posts';
import { getComments } from '../../_actions/comments';
import { Card, CardContent, Container, makeStyles } from '@material-ui/core';
import { Favorite, FavoriteBorder, Comment } from '@material-ui/icons/';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import CreateComment from '../comments/CreateComment';
import GetComments from '../comments/GetComments';
import SinglePost from './SinglePost';

dayjs.extend(relativeTime);

const useStyles = makeStyles({
  root: {
    marginTop: '50px',
  },
  comment: {
    marginTop: '10px',
  },
});

export default function GetSinglePost(props) {
  const { userid, postid } = props.match.params;
  const { user } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleUserPost(userid, postid));
    dispatch(getComments({ postId: postid }));
  }, [dispatch]);

  const post = useSelector((state) => state.posts);
  const comments = useSelector((state) => state.comments);
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>
        <SinglePost
          posts={post}
          user={user}
          commentsLen={comments.commentsList.length}
          hasLink={false}
        />
      </Container>
      <Container className={classes.comment}>
        <Card>
          <CardContent>
            {user ? (
              <CreateComment postId={postid} userId={user._id} />
            ) : (
              'Login to comment'
            )}
          </CardContent>
        </Card>
      </Container>
      <Container className={classes.comment}>
        <Card>
          <CardContent>
            <GetComments comments={comments.commentsList} />
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
