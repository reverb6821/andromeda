import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { NovaTag } from '../nova-tag'
import { Check } from 'lucide-react'
import '@testing-library/jest-dom'

describe('NovaTag', () => {
  it('renders the label text', () => {
    render(<NovaTag label='Test Badge' />)
    expect(screen.getByText('Test Badge')).toBeInTheDocument()
  })

  it('applies correct variant classes', () => {
    const { container } = render(<NovaTag label='Test Badge' variant='success' />)
    expect(container.firstChild).toHaveClass('bg-green-100')
  })

  it('has role=status and aria-label', () => {
    render(<NovaTag label='Badge' aria-label='Custom status' />)
    const badge = screen.getByText('Badge')
    screen.debug()
    expect(badge).toHaveAttribute('role', 'status')
    expect(badge).toHaveAttribute('aria-label', 'Custom status')
  })

  it('renders default variant', () => {
    render(<NovaTag label='Default' />)
    expect(screen.getByRole('status')).toHaveTextContent('Default')
  })

  it('renders success variant with icon', () => {
    render(<NovaTag label='Success' variant='success' icon={<Check data-testid='icon' />} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent('Success')
  })

  it('renders outline variant', () => {
    render(<NovaTag label='Outline' variant='outline' />)
    const tag = screen.getByRole('status')
    expect(tag).toHaveTextContent('Outline')
    expect(tag.className).toMatch(/border/)
  })
})