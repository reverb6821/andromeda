// __tests__/custom-card.test.tsx
import { render, screen } from "@testing-library/react"
import NebulaPanel from "@/registry/ui/nebula-panel"
import { CircleUser } from "lucide-react"
import { describe, it, expect } from "vitest"

describe("NebulaPanel", () => {
  it("renders the title and description", () => {
    render(
      <NebulaPanel title="Test Card" description="Test description">
        <p>Card content</p>
      </NebulaPanel>
    )
    expect(screen.getByText("Test Card")).toBeInTheDocument()
    expect(screen.getByText("Test description")).toBeInTheDocument()
    expect(screen.getByText("Card content")).toBeInTheDocument()
  })

  it("renders the icon if provided", () => {
    render(
      <NebulaPanel
        title="With Icon"
        icon={<CircleUser data-testid="icon" />}
      />
    )
    expect(screen.getByTestId("icon")).toBeInTheDocument()
  })
})
