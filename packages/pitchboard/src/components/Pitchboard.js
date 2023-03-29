import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const columns = [
  { id: 'status', label: 'Status', minWidth: 170 },
  { id: 'title', label: 'Title', minWidth: 220 },
  { id: 'segment', label: 'Segment', minWidth: 100 },
  { id: 'office', label: 'Office', minWidth: 170 }
];

function createData(status, title, segment, office) {
  return { status, title, segment, office };
}

const rows = [
  createData('Prospect', 'Enterprise Analytics Platforms', 'PE', 'New York'),
  createData('Prospect', 'RCM Market', 'PE', 'Hong Kong'),
  createData('Pitch Ready', 'Commercial Property Management Software', 'PE', 'New York'),
  createData('Pitch ready', 'Insurance Technology', 'AS', 'London'),
  createData('Pitched', 'Take-Out Packaging', 'PE', 'New York'),
  createData('Pitched', 'Optum: Company Spotlight', 'AS', 'London'),
  createData('Sold', 'Commercial Waste Management', 'PE', 'New York'),
  createData('Declined', 'IT Partner Ecosystem', 'PE', 'New York')
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  headline: {
    textAlign: "center",
    margin: theme.spacing(4, 0),
  },
}));

function Pitchboard() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container component="main" maxWidth="lg">
      <Typography gutterBottom variant="h5" component="h2" className={classes.headline}>
        Pitchboard
      </Typography>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.title}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
}

export { Pitchboard };
