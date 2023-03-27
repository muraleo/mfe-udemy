import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    width: '600px',
    marginLeft: theme.spacing(3),
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 260,
  },
}));

export const ImageCard = ({ title, description }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={3}>
      <div className={classes.cardDetails}>
        <CardContent>
          <h2>{title}</h2>
          <div>{description}</div>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cardMedia}
        image={
          'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
      />
    </Card>
  );
};
