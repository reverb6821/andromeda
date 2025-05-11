import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { NovaTag } from "./nova-tag"
import "@testing-library/jest-dom"

describe("NovaTag", () => {
  it("renders the label text", () => {
    render(<NovaTag>Test Badge</NovaTag>)
    expect(screen.getByText("Test Badge")).toBeInTheDocument()
  })

  it("applies correct variant classes", () => {
    const { container } = render(<NovaTag variant="success">OK</NovaTag>)
    expect(container.firstChild).toHaveClass("bg-green-100")
  })

  it("has role=status and aria-label", () => {
    render(<NovaTag aria-label="Custom status">Badge</NovaTag>)
    const badge = screen.getByText("Badge")
    expect(badge).toHaveAttribute("role", "status")
    expect(badge).toHaveAttribute("aria-label", "Custom status")
  })
})