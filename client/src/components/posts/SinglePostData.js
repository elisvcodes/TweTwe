import React from 'react';
import {
  CardHeader,
  CardContent,
  Typography,
  Link,
  makeStyles,
} from '@material-ui/core';
import DeletePost from './DeletePost';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const useStyles = makeStyles({
  link: {
    color: 'black',
  },
});

export default function SinglePostData({ post, hasLink }) {
  const classes = useStyles();
  return (
    <>
      <CardHeader
        title={
          <Link
            href={`/${post.author._id}`}
            underline="none"
            className={classes.link}
          >
            {post.author.name}
          </Link>
        }
        subheader={<p> {dayjs(post.createdAt).format('MM/DD/YYYY')}</p>}
        action={<DeletePost postId={post._id} />}
      />
      <CardContent>
        {hasLink ? (
          <Link
            href={`/${post.author._id}/post/${post._id}`}
            underline="none"
            className={classes.link}
          >
            <Typography variant="h6">{post.article}</Typography>
          </Link>
        ) : (
          <Typography variant="h6">{post.article}</Typography>
        )}
      </CardContent>
    </>
  );
}
