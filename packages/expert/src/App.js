import React from 'react';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { ExpertPage } from './page/ExpertPage';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ex',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <ExpertPage />
      </StylesProvider>
    </div>
  );
};
