import { Card, Container, CardContent, makeStyles } from '@material-ui/core';
import React from 'react';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const useStyles = makeStyles({
  root: {
    margin: '10px 0',
  },
});

export default function GetComments({ comments }) {
  const classes = useStyles();
  return (
    <>
      {comments.length !== 0 ? (
        comments.map((comment) => {
          return (
            <Card key={comment._id} className={classes.root}>
              <CardContent>
                <p>{comment.author.name}</p>
                <p>{dayjs(comment.createdAt).format('MM/DD/YYYY')}</p>
                <p>{comment.comment}</p>
              </CardContent>
            </Card>
          );
        })
      ) : (
        <Card>
          <CardContent>
            <p>No Comments</p>
          </CardContent>
        </Card>
      )}
    </>
  );
}
