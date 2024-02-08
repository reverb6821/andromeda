import { render, fireEvent } from '@testing-library/react';

import Button from '../Button';

describe('Button', () => {
  test('renders the button with the correct label', () => {
    const { getByText } = render(
      <Button
        btnStyle='primary'
        label='Lorem Ipsum'
        type='button'
        onBtnClick={jest.fn()}
      />
    );
    expect(getByText('Lorem Ipsum')).toBeInTheDocument();
  });

  test('renders the button with primary style', () => {
    const { getByText } = render(
      <Button
        btnStyle='primary'
        label='Lorem Ipsum'
        type='button'
        onBtnClick={jest.fn()}
      />
    );
    expect(getByText('Lorem Ipsum')).toBeInTheDocument();
    expect(getByText('Lorem Ipsum')).toHaveClass('btn-primary text-slate-200');
  });

  test('renders the button with primary--alert style', () => {
    const { getByText } = render(
      <Button
        btnStyle='primary--alert'
        label='Lorem Ipsum'
        type='button'
        onBtnClick={jest.fn()}
      />
    );
    expect(getByText('Lorem Ipsum')).toBeInTheDocument();
    expect(getByText('Lorem Ipsum')).toHaveClass('btn-primary--alert text-slate-200');
  });

  test('renders the button with primary--warn style', () => {
    const { getByText } = render(
      <Button
        btnStyle='primary--warn'
        label='Lorem Ipsum'
        type='button'
        onBtnClick={jest.fn()}
      />
    );
    expect(getByText('Lorem Ipsum')).toBeInTheDocument();
    expect(getByText('Lorem Ipsum')).toHaveClass('btn-primary--warn text-slate-200');
  });

  test('renders the button with primary--success style', () => {
    const { getByText } = render(
      <Button
        btnStyle='primary--success'
        label='Lorem Ipsum'
        type='button'
        onBtnClick={jest.fn()}
      />
    );
    expect(getByText('Lorem Ipsum')).toBeInTheDocument();
    expect(getByText('Lorem Ipsum')).toHaveClass('btn-primary--success text-slate-200');
  });

  test('renders the button with secondary style', () => {
    const { getByText } = render(
      <Button
        btnStyle='secondary'
        label='Lorem Ipsum'
        type='button'
        onBtnClick={jest.fn()}
      />
    );
    expect(getByText('Lorem Ipsum')).toBeInTheDocument();
    expect(getByText('Lorem Ipsum')).toHaveClass('btn-secondary');
  });

  test('renders the button with secondary--alert style', () => {
    const { getByText } = render(
      <Button
        btnStyle='secondary--alert'
        label='Lorem Ipsum'
        type='button'
        onBtnClick={jest.fn()}
      />
    );
    expect(getByText('Lorem Ipsum')).toBeInTheDocument();
    expect(getByText('Lorem Ipsum')).toHaveClass('btn-secondary--alert');
  });

  test('renders the button with secondary--warn style', () => {
    const { getByText } = render(
      <Button
        btnStyle='secondary--warn'
        label='Lorem Ipsum'
        type='button'
        onBtnClick={jest.fn()}
      />
    );
    expect(getByText('Lorem Ipsum')).toBeInTheDocument();
    expect(getByText('Lorem Ipsum')).toHaveClass('btn-secondary--warn');
  });

  test('renders the button with secondary--success style', () => {
    const { getByText } = render(
      <Button
        btnStyle='secondary--success'
        label='Lorem Ipsum'
        type='button'
        onBtnClick={jest.fn()}
      />
    );
    expect(getByText('Lorem Ipsum')).toBeInTheDocument();
    expect(getByText('Lorem Ipsum')).toHaveClass('btn-secondary--success');
  });

  test('handles click events', () => {
    const handleClick = jest.fn()

    const { getByText } = render(<Button
      btnStyle='primary'
      label='Lorem Ipsum'
      type='button'
      onBtnClick={handleClick}
    />);
    fireEvent.click(getByText('Lorem Ipsum'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('displays the loader when isLoading is true', () => {
    const { container } = render(
      <Button
        btnStyle='primary'
        label='Lorem Ipsum'
        type='button'
        onBtnClick={jest.fn()}
        isLoading={true}
      />
    );
    expect(container.querySelector('.animate-spin')).toBeInTheDocument();
  });

  test('displays the loader when isLoading is false', () => {
    const { container } = render(
      <Button
        btnStyle='primary'
        label='Lorem Ipsum'
        type='button'
        onBtnClick={jest.fn()}
        isLoading={false}
      />
    );
    expect(container.querySelector('.animate-spin')).not.toBeInTheDocument();
  });

  test('is disabled when the disabled prop is true', () => {
    const { getByText } = render(
      <Button
        btnStyle='primary'
        label='Lorem Ipsum'
        type='button'
        onBtnClick={jest.fn()}
        disabled={true}
      />
    );
    expect(getByText('Lorem Ipsum')).toBeDisabled();
  });

  test('displays the icon when icon prop', () => {
    const { getByText, container } = render(
      <Button
        btnStyle='primary'
        label='Lorem Ipsum'
        type='button'
        onBtnClick={jest.fn()}
        icon="ri-mail-send-line"
      />
    );
    expect(getByText('Lorem Ipsum')).toBeInTheDocument();
    expect(container.querySelector('i')).toBeInTheDocument();
    expect(container.querySelector('i')).toHaveClass('ri-mail-send-line');
  });
})