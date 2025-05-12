// components/andromeda/InfoStar/InfoStar.test.tsx

import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { InfoStar } from '../info-star'
import userEvent from '@testing-library/user-event'

describe('InfoStar', () => {
  it('renders child element', () => {
    render(
      <InfoStar content="Tooltip text">
        <button>Hover me</button>
      </InfoStar>
    )
    expect(screen.getByText('Hover me')).toBeInTheDocument()
  })

  it('shows tooltip on hover', async () => {
    render(
      <InfoStar content="Tooltip text">
        <button>Hover me</button>
      </InfoStar>
    )
    await userEvent.hover(screen.getByRole('button'))
    await waitFor(() => {
      expect(screen.getByText('Tooltip text')).toBeVisible()
    })
  })

  it('supports custom content', async () => {
    render(
      <InfoStar content={<span data-testid="custom">Custom Tooltip</span>}>
        <button>Hover me</button>
      </InfoStar>
    )
    await userEvent.hover(screen.getByRole('button'))
    await waitFor(() => {
      expect(screen.getByTestId('custom')).toBeInTheDocument()
    })
  })
})
