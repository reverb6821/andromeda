import { render } from '@testing-library/react';

import Badge from '../Badge';

describe('Badge', () => {
  test('renders component without crash', () => {
    const { getByText } = render(<Badge badgeStyle="primary" label="Lorem Ipsum" />);
    const badgeElement = getByText('Lorem Ipsum');
    expect(badgeElement).toBeInTheDocument();
  });

  test('Check if label is correct', () => {
    const { container } = render(<Badge badgeStyle="secondary--warn" label="Lorem Ipsum" />);
    const badgeElement = container.querySelector('span');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveTextContent('Lorem Ipsum');
  });

  test('renders with primary style', () => {
    const { getByText } = render(<Badge badgeStyle="primary" label="Lorem Ipsum" />);
    const badgeElement = getByText('Lorem Ipsum');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-sky-800 text-sky-100');
  });

  test('renders with primary--alert style', () => {
    const { getByText } = render(<Badge badgeStyle="primary--alert" label="Lorem Ipsum" />);
    const badgeElement = getByText('Lorem Ipsum');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-red-800 text-red-100');
  });

  test('renders with primary--warn style', () => {
    const { getByText } = render(<Badge badgeStyle="primary--success" label="Lorem Ipsum" />);
    const badgeElement = getByText('Lorem Ipsum');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-emerald-800 text-emerald-100');
  });

  test('renders with primary--warn style', () => {
    const { getByText } = render(<Badge badgeStyle="primary--warn" label="Lorem Ipsum" />);
    const badgeElement = getByText('Lorem Ipsum');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-yellow-500 text-yellow-100');
  });

  test('renders with secondary style', () => {
    const { getByText } = render(<Badge badgeStyle="secondary" label="Lorem Ipsum" />);
    const badgeElement = getByText('Lorem Ipsum');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-transparent text-sky-800 border border-sky-400');
  });

  test('renders with secondary--alert style', () => {
    const { getByText } = render(<Badge badgeStyle="secondary--alert" label="Lorem Ipsum" />);
    const badgeElement = getByText('Lorem Ipsum');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-transparent text-red-800 border border-red-400');
  });

  test('renders with secondary--success style', () => {
    const { getByText } = render(<Badge badgeStyle="secondary--success" label="Lorem Ipsum" />);
    const badgeElement = getByText('Lorem Ipsum');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-transparent text-emerald-800 border border-emerald-400');
  });

  test('renders with secondary--warn style', () => {
    const { getByText } = render(<Badge badgeStyle="secondary--warn" label="Lorem Ipsum" />);
    const badgeElement = getByText('Lorem Ipsum');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-transparent text-yellow-800 border border-yellow-400');
  });
});