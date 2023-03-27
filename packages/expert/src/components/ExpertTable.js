import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { MockDataRows as rows } from '../__mock__/mockdataRows';

const useStyles = makeStyles((theme) => ({
  title: {
    padding: '24px 12px 12px',
  },
  tableContainer: {
    paddingBottom: theme.spacing(3),
  },
  table: {
    minWidth: 650,
  },
}));

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
                <TableCell>{row.name}</TableCell>
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
