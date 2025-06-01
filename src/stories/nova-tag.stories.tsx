import type { Meta, StoryObj } from "@storybook/react"
import { Check, AlertCircle, AlertTriangle } from "lucide-react"
import { NovaTag } from "../registry/ui/nova-tag"

const meta: Meta<typeof NovaTag> = {
  title: "Andromeda/Components/UI Elements/NovaTag",
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
  render: () => <NovaTag label="Default" />,
}

export const SuccessWithIcon: Story = {
  render: () => (
    <NovaTag variant="success" label="Success" icon={<Check className="w-3 h-3" />} />
  ),
}

export const Warning: Story = {
  render: () => (
    <NovaTag variant="warning" label="Warning" icon={<AlertTriangle className="w-3 h-3" />} />
  ),
}

export const Destructive: Story = {
  render: () => (
    <NovaTag variant="destructive" label="Error" icon={<AlertCircle className="w-3 h-3" />} />
  ),
}

export const Outline: Story = {
  render: () => <NovaTag variant="outline" label="Outline" />,
}