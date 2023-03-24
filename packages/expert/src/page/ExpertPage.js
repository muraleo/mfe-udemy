import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Bar, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { MockData } from '../__mock__/mockdata';
import { MainCover } from '../components/MainCover';
import { ImageCard } from '../components/ImageCard';
import { ExpertTable } from '../components/ExpertTable';

const useStyles = makeStyles((theme) => ({
  container: {
    background: '#d7f2f5',
    height: '100%',
    fontFamily: 'Helvetica',
  },
  subContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  barPaper: {
    width: '400px',
    height: '250px',
  },
  linePaper: {
    width: '400px',
    marginLeft: theme.spacing(3),
  },
  linePaper: {
    width: '400px',
    marginLeft: theme.spacing(3),
  },
  graphPaper: {
    width: '100%',
    margin: theme.spacing(3),
  },
}));

export const ExpertPage = () => {
  const classes = useStyles();

  const data = {
    labels: MockData.map((data) => data.year),
    datasets: [
      {
        label: 'Experts Gained',
        data: MockData.map((data) => data.userGain),
        backgroundColor: [
          '#beebd4',
          '#a2e6e8',
          '#56db9d',
          '#ebeda4',
          '#4b76db',
        ],
        borderColor: 'black',
        borderWidth: 1,
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      },
    ],
  };

  return (
    <div className={classes.container}>
      <MainCover title="Welcome to the Expert Page!" />
      <div className={classes.subContainer}>
        <Paper className={classes.barPaper} elevation={3}>
          <div className={classes.title}>Experts Gained Bar Graph</div>
          <Bar data={data} />
        </Paper>
        <Paper className={classes.linePaper} elevation={3}>
          <div className={classes.title}>Experts Gained Line Graph</div>
          <Line data={data} />
        </Paper>
        <ImageCard
          title="We want to help you find the best Expert"
          description="Join us for more details!"
        />
      </div>
      <div className={classes.subContainer}>
        <Paper className={classes.graphPaper} elevation={3}>
          <ExpertTable />
        </Paper>
      </div>
    </div>
  );
};
