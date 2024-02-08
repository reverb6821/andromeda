import { render, fireEvent } from '@testing-library/react';

import Cards from '../Cards';

describe('Cards', () => {
  const mockAction = jest.fn();

  test('renders the title and subtitle', () => {
    const { getByText } = render(
    <Cards
      title='Hello World!'
      subtitle='Lorem Ipsum dolor sit amet'
      action={mockAction}
      actionLabel='Go To'
    />
    );
    expect(getByText('Hello World!')).toBeInTheDocument();
    expect(getByText('Lorem Ipsum dolor sit amet')).toBeInTheDocument();

  });

  test('renders the image if present', () => {
    const { getByAltText } = render(
      <Cards
        title='Hello World!'
        subtitle='Lorem Ipsum dolor sit amet'
        action={mockAction}
        actionLabel='Go To'
        image='imageplaceholder.png'
      />
      );
      expect(getByAltText('Hello World!')).toBeInTheDocument()
     expect(getByAltText('Hello World!')).toHaveAttribute('src', 'imageplaceholder.png');
  });

  test('calls the action when the button is clicked', () => {
    const { getByText } = render(
      <Cards
        title='Hello World!'
        subtitle='Lorem Ipsum dolor sit amet'
        action={mockAction}
        actionLabel='Go To'
        image='imageplaceholder.png'
      />
      );
    expect(getByText('Go To')).toBeInTheDocument();

    fireEvent.click(getByText('Go To'));
    expect(mockAction).toHaveBeenCalled();
  });
});