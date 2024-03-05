import { render } from '@testing-library/react';
import ThemeSwitcher from '../ThemeSwitcher';

import { Provider } from 'react-redux'; // Importa il Provider
import configureStore from '@reduxjs/toolkit';

describe('ThemeSwitcher', () => {
  test('rendered component', () => {
    const initialState = { theme: { isDarkMode: false } };
    const mockStore = configureStore({ reducer: { theme: initialState } });

    const { getByRole } = render(
        <Provider store={mockStore}>
        <ThemeSwitcher />
      </Provider>
    );
    expect(getByRole('button'))
  })
})

