import React from 'react';
import { CardHeader, CardContent, Typography } from '@material-ui/core';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export default function SinglePostData({ post }) {
  return (
    <>
      <CardHeader
        title={post.author.name}
        subheader={<p> {dayjs(post.createdAt).format('MM/DD/YYYY')}</p>}
      />
      <CardContent>
        <Typography variant="h6">{post.article}</Typography>
      </CardContent>
    </>
  );
}
