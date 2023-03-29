import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { Pitchboard } from './components/Pitchboard';

const generateClassName = createGenerateClassName({
  productionPrefix: 'pb',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Pitchboard />
      </StylesProvider>
    </div>
  );
};
