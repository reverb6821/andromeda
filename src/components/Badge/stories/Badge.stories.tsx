import type { Meta, StoryObj } from "@storybook/react";

import Badge from '../Badge';

const meta: Meta<typeof Badge> = {
    title: "Andromeda/Partials/Badge",
    component: Badge,
  };

  export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
    args: {
    badgeStyle: 'primary',
      label:'Primary',
    },
  };
  export const Secondary: Story = {
    args: {
        badgeStyle: 'secondary',
        label:'Secondary',
    },
  };