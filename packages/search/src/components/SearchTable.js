/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import mockData from './mockData';
import columnDefs from './columnDefs';

const useStyles = makeStyles(() => ({
  searchPageWrapper: {
    width: '100%',
  },
  formWrapper: {
    width: '800px',
    margin: '10px auto',
  },
  searchTextField: {
    width: '100%',
  },
  tableWrapper: {
    width: '100%',
    maxWidth: '800px',
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
  },
}));

export default function SearchTable() {
  const classes = useStyles();
  return (
    <div className={classes.searchPageWrapper}>
      <form className={classes.formWrapper} noValidate autoComplete="off">
        <TextField className={classes.searchTextField} id="outlined-search" label="Search field" type="search" variant="outlined" />
      </form>
      <div className={classes.tableWrapper} style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={mockData}
          columns={columnDefs}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
