import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleUserPost } from '../../_actions/posts';
import { likePost } from '../../_actions/posts';
import { getComments } from '../../_actions/comments';
import {
  Card,
  CardContent,
  Container,
  makeStyles,
  CardActions,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { Favorite, FavoriteBorder, Comment } from '@material-ui/icons/';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import CreateComment from '../comments/CreateComment';
import GetComments from '../comments/GetComments';
import SinglePostData from './SinglePostData';
import CommentIcon from './CommentIcon';

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

  const post = useSelector((state) => state.post);
  const comments = useSelector((state) => state.comments);
  const classes = useStyles();
  const checkId =
    Object.keys(post).length === 0 ? null : post.likes.includes(user._id);

  return (
    <>
      <Container className={classes.root}>
        <Card>
          {Object.keys(post).length === 0 ? (
            <h6> Empty</h6>
          ) : (
            <>
              <SinglePostData post={post} />
              <CardActions>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={
                        checkId ? (
                          <Favorite color="primary" />
                        ) : (
                          <FavoriteBorder color="secondary" />
                        )
                      }
                      checkedIcon={
                        checkId ? (
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
            <GetComments comments={comments.commentsList} />
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
