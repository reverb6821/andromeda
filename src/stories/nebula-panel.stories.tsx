// components/ui/custom-card.stories.tsx
import type { Meta, StoryObj } from "@storybook/react"
import NebulaPanel from "@/registry/ui/nebula-panel"
import { CircleUser } from "lucide-react"

const meta: Meta<typeof NebulaPanel> = {
  title: "Andromeda/Components/UI Elements/NebulaPanel",
  component: NebulaPanel,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    icon: { control: false },
    children: { control: "text" },
  },
}
export default meta

type Story = StoryObj<typeof NebulaPanel>

export const Default: Story = {
  args: {
    title: "Card Title",
    description: "Card Description",
    children: <p>This is card content</p>,
  },
}

export const WithIcon: Story = {
  args: {
    title: "Card with Icon",
    description: "This card has an icon",
    icon: <CircleUser />,
    children: <p>User details go here</p>,
  },
}
