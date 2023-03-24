import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  title: {
    padding: '24px 12px 12px',
  },
  table: {
    minWidth: 650,
  },
  tableContainer: {
    paddingBottom: theme.spacing(3),
  },
}));

function createData(name, position, location, timezone) {
  return { name, position, location, timezone };
}

const rows = [
  createData('Walter White', 'Chemists', 'Texas, US', 'CDT'),
  createData('John Doe', 'Manager', 'New Jersey, US', 'EST'),
  createData('Elliot Alderson', 'Software Engineer', 'New York, US', 'EST'),
  createData('Jon Snow', 'Bodyguard', 'Texas, US', 'CDT'),
  createData('Carl Casper', 'Chef', 'California, US', 'PST'),
];

export const ExpertTable = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.title}>Experts</div>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Position</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Timezone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.position}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <TableCell align="right">{row.timezone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
