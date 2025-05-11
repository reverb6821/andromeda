import type { Meta, StoryObj } from "@storybook/react"
import { NovaTag } from "./nova-tag"

const meta: Meta<typeof NovaTag> = {
  title: "UI Elements/Badge",
  component: NovaTag,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "destructive"],
    },
  },
}

export default meta

type Story = StoryObj<typeof NovaTag>

export const Default: Story = {
  args: {
    children: "Default",
    variant: "default",
  },
}

export const Success: Story = {
  args: {
    children: "Success",
    variant: "success",
  },
}

export const Warning: Story = {
  args: {
    children: "Warning",
    variant: "warning",
  },
}

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
}