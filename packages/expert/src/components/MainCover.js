import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainPaper: {
    position: 'relative',
    backgroundImage:
      'url("https://images.pexels.com/photos/2422286/pexels-photo-2422286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '400px',
    marginBottom: theme.spacing(4),
  },
  tint: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.3)',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  content: {
    position: 'relative',
    padding: theme.spacing(6),
  },
}));

export const MainCover = ({ title }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.mainPaper} elevation={3}>
      <div className={classes.tint} />
      <Grid container>
        <Grid md={6}>
          <div className={classes.content}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
              style={{ fontFamily: 'Georgia', color: 'white' }}
            >
              {title}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
