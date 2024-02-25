import type { Meta, StoryObj } from '@storybook/react';

import FlexContainer  from '../FlexContainer';

const meta: Meta<typeof FlexContainer> = {
    title: 'Starter/FlexContainer',
    component: FlexContainer,
  };

export default meta;
type Story = StoryObj<typeof FlexContainer>;

export const Default: Story = {
    args: {
      // ADD ARGS HERE
    },
  };