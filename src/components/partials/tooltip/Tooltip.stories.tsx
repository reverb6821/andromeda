import type { Meta, StoryObj } from "@storybook/react";

import Tooltip from './Tooltip';

const meta: Meta<typeof Tooltip> = {
    title: "Andromeda/Partials/Tooltip",
    component: Tooltip,
  };

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const TooltipExample: Story = {
    args: {
        tooltipText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
  };
