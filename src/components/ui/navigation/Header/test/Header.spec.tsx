import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from '@/store/store';

import Header from '../Header';

describe('Header', () => {
  const props = {
    headerTitle: 'Andromeda',
    headerSubTitle: 'A Component Collection',
    headerLogo: 'logo.png',
    headerEl: [{ label: 'Home', route: '/home' }, { label: 'About', route: '/about' }],
  }

  test('renders without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Header {...props} />
        </Router>
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });

  test('renders the header title and subtitle', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <Header {...props} />
        </Router>
      </Provider>
    );
    expect(getByText('Andromeda')).toBeInTheDocument();
    expect(getByText('A Component Collection')).toBeInTheDocument();
  });

  // test('toggles mobile menu on click', () => {
  //   const { getByRole, queryByText } = render(
  //     <Provider store={store}>
  //     <Router>
  //       <Header {...props} />
  //     </Router>
  //     </Provider>
  //   );
  //   const button = getByRole('button');
  //   fireEvent.click(button);
  //   expect(queryByText('Home')).toBeInTheDocument();
  //   fireEvent.click(button);
  //   expect(queryByText('Home')).not.toBeInTheDocument();
  // });
});