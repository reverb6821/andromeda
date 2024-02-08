import { render } from '@testing-library/react';

import Footer from '../Footer';

describe('Footer', () => {
  const footerTitle = 'Andromeda';
  const footerEl = [{ label: 'Login', route: '/login' }, { label: 'Register', route: '/register' }];
  test('renders the footer with title and elements', () => {
    const {getByText} = render(<Footer footerTitle={footerTitle} footerEl={footerEl} />);
    expect(getByText('Andromeda')).toBeInTheDocument();
    footerEl.forEach((el) => {
      expect(getByText(el.label)).toBeInTheDocument();
    });
  });
  
});