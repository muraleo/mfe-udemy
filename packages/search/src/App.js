/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import SearchTable from './components/SearchTable';

const generateClassName = createGenerateClassName({
  productionPrefix: '_search',
});

export default function () {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <SearchTable />
      </StylesProvider>
    </div>
  );
}
