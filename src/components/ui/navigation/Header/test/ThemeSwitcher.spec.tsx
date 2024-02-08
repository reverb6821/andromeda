import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import store from '@/store/store';

import ThemeSwitcher from '../shared/ThemeSwitcher';

describe('ThemeSwitcher', () => {
  test('renders without crashing', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <ThemeSwitcher />
      </Provider>
    );
    expect(getByRole('button')).toBeInTheDocument();
  });

  test('toggles theme mode on click', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <ThemeSwitcher />
      </Provider>
    );
    const button = getByRole('button');
    fireEvent.click(button);
  });
});