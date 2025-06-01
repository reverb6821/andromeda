import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, beforeAll } from 'vitest'
import { InfoStar } from '../info-star'
import userEvent from '@testing-library/user-event'

// Optional: Mock ResizeObserver if the tooltip library uses it
beforeAll(() => {
  global.ResizeObserver = class {
    observe() { }
    unobserve() { }
    disconnect() { }
  } as any
})

describe('InfoStar', () => {
  it('renders the child element', () => {
    render(
      <InfoStar content="Tooltip text">
        <button>Hover me</button>
      </InfoStar>
    )
    expect(screen.getByRole('button', { name: /hover me/i })).toBeInTheDocument()
  })

  it('displays the tooltip on hover', async () => {
    render(
      <InfoStar content="Tooltip text">
        <button>Hover me</button>
      </InfoStar>
    )

    const button = screen.getByRole('button', { name: /hover me/i })
    await userEvent.hover(button)

    await waitFor(() => {
      // Flexible matcher in case content is split
      expect(screen.getByText((_, element) =>
        element?.textContent === 'Tooltip text'
      )).toBeVisible()
    })
  })

  it('supports rendering custom content', async () => {
    render(
      <InfoStar content={<span data-testid="custom">Custom Tooltip</span>}>
        <button>Hover me</button>
      </InfoStar>
    )

    const button = screen.getByRole('button', { name: /hover me/i })
    await userEvent.hover(button)

    await waitFor(() => {
      const tooltips = screen.queryAllByTestId('custom')

      // Fallback a visibility check che funzioni anche con position: fixed
      const visibleTooltip = tooltips.find(el => {
        const style = window.getComputedStyle(el)
        return style.visibility !== 'hidden' && style.display !== 'none' && style.opacity !== '0'
      })

      expect(visibleTooltip).toBeDefined()
      expect(visibleTooltip).toHaveTextContent('Custom Tooltip')
    })
  })
})
