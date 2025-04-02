import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(2),
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

interface MomentCardProps {
  moment: {
    id: string;
    title: string;
    player: string;
    image: string;
    price: number;
  };
}

const MomentCard: React.FC<MomentCardProps> = ({ moment }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={moment.image}
        title={moment.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {moment.title}