import { InfoStar } from '../registry/ui/info-star'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof InfoStar> = {
  title: 'Andromeda/Components/UI Elements/InfoStar',
  component: InfoStar,
  tags: ['autodocs'],
  args: {
    content: 'Tooltip content',
    children: <button className="px-3 py-1 bg-blue-600 text-white rounded">Hover me</button>,
  },
}

export default meta

type Story = StoryObj<typeof InfoStar>

export const Default: Story = {}
export const RightSide: Story = {
  args: {
    side: 'right',
  },
}
export const CustomContent: Story = {
  args: {
    content: (
      <div>
        <strong>Advanced</strong> tooltip<br />
        with <em>HTML</em> content
      </div>
    ),
  },
}
