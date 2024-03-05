import { render } from '@testing-library/react';

import Modal from '../Modal';

describe('Modal', () => {
  test('rendered component', () => {
    const { container } = render(<Modal />);
    expect(container).toHaveLength(1);
  });
})
