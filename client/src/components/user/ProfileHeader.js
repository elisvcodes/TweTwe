import React from 'react';
import { Card, CardActions, CardContent, Grid, Paper } from '@material-ui/core';
import Follow from './Follow';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export default function ProfileHeader({ user, viewingProfile }) {
  console.log(user);
  console.log(viewingProfile);
  return (
    <>
      {viewingProfile && (
        <Card>
          <Grid container>
            <Grid item xs={6} sm={11}>
              <CardContent>
                <h1> {viewingProfile.name}</h1>
                <h5>
                  Memeber Since:{' '}
                  {dayjs(viewingProfile.createdAt).format('MM/DD/YYYY')}
                </h5>
              </CardContent>
            </Grid>
            <CardActions>
              <Grid item xs={6} sm={1}>
                {user._id === viewingProfile._id ? '' : <Follow />}
              </Grid>
            </CardActions>
          </Grid>
        </Card>
      )}
    </>
  );
}
