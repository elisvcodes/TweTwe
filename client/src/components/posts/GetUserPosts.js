import React, { useEffect, useState } from 'react';
import SinglePost from './SinglePost';
import { Container } from '@material-ui/core';

export default function GetUserPosts({ posts, user }) {
  console.log(user);
  return (
    <>
      <Container>
        <SinglePost posts={posts} user={user} />
      </Container>
    </>
  );
}

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import * as dayjs from 'dayjs';
// import relativeTime from 'dayjs/plugin/relativeTime';
// import { useDispatch } from 'react-redux';

// import {
//   Card,
//   CardContent,
//   CardActions,
//   FormControlLabel,
//   Checkbox,
//   Typography,
//   makeStyles,
// } from '@material-ui/core';
// import { Favorite, FavoriteBorder } from '@material-ui/icons/';
// import { likePost } from '../../_actions/posts';
// import CommentIcon from './CommentIcon';

// import SinglePostData from './SinglePostData';
// dayjs.extend(relativeTime);

// const useStyles = makeStyles({
//   root: {
//     margin: '10px 0',
//     padding: '10px 0',
//   },
//   link: {
//     textDecoration: 'none',
//     color: 'black',
//   },
// });

// export default function GetUserPosts({ posts }) {
//   const classes = useStyles();
//   const dispatch = useDispatch();

//   return (
//     <>
//       {posts.length !== 0 ? (
//         <>
//           {posts.map((post) => {
//             return (
//               <Card key={post._id} className={classes.root}>
//                 <Link
//                   to={`/${post.author._id}/post/${post._id}`}
//                   className={classes.link}
//                 >
//                   <SinglePostData post={post} />
//                 </Link>
//                 <CardActions>
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         icon={<FavoriteBorder />}
//                         checkedIcon={<Favorite />}
//                         name="checkedH"
//                         onClick={() => dispatch(likePost(post._id))}
//                       />
//                     }
//                     label={post.likes.length}
//                   />
//                   <CommentIcon commentsLen={post.comments.length} />
//                 </CardActions>
//               </Card>
//             );
//           })}
//         </>
//       ) : (
//         <>
//           <Card className={classes.root}>
//             <CardContent>
//               <Typography variant="h6">No Posts Yet</Typography>
//             </CardContent>
//           </Card>
//         </>
//       )}
//     </>
//   );
// }
