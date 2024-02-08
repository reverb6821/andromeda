import { render } from '@testing-library/react';

import Grid from '../Grid';

describe('Grid', () => {
  const children = <div>Test Child</div>;
  const classNames = 'test-class';

  test('renders the grid with children and class names', () => {
    const { container, getByText } = render(<Grid children={children} classNames={classNames} direction='row' />);
    expect(container.querySelector('div.flex')).toBeInTheDocument();
    expect(getByText('Test Child').parentElement).toHaveClass('test-class');
  });

  test('renders the grid with row direction', () => {
   const {getByText} = render(<Grid children={children} classNames={classNames} direction='row' />);
    expect(getByText('Test Child').parentElement).toHaveClass('flex-row');
  });

  test('renders the grid with row-reverse direction', () => {
    const {getByText} =render(<Grid children={children} classNames={classNames} direction='row-reverse' />);
    expect(getByText('Test Child').parentElement).toHaveClass('flex-row-reverse');
  });

  test('renders the grid with column direction', () => {
    const {getByText} =render(<Grid children={children} classNames={classNames} direction='column' />);
    expect(getByText('Test Child').parentElement).toHaveClass('flex-col');
  });

  test('renders the grid with column-reverse direction', () => {
    const {getByText} =render(<Grid children={children} classNames={classNames} direction='column-reverse' />);
    expect(getByText('Test Child').parentElement).toHaveClass('flex-col-reverse');
  });
});