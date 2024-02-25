import { Provider } from 'react-redux';
import store from '../src/store/store';
import * as React from 'react';

export const withRedux = (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  );