import React from 'react';
import { getFollowerCount } from '../../_actions/user';
import { useDispatch } from 'react-redux';
import { Card, CardActions, CardContent, Grid, Paper } from '@material-ui/core';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export default function ProfileHeader({ user }) {
  const dispatch = useDispatch();
  dispatch(getFollowerCount());
  return (
    <>
      <Card>
        <Grid container>
          <Grid item xs={6} sm={11}>
            <CardContent>
              <h1> {user[0].result.name}</h1>
              <h5>
                Memeber Since:{' '}
                {dayjs(user[0].result.createdAt).format('MM/DD/YYYY')}
              </h5>
            </CardContent>
          </Grid>
          <CardActions>
            <Grid item xs={6} sm={1}>
              <button>Follow</button>
            </Grid>
          </CardActions>
        </Grid>
      </Card>
    </>
  );
}
