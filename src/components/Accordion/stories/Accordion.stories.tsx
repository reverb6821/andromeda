import type { Meta, StoryObj } from '@storybook/react';

import Accordion  from '../Accordion';

const meta: Meta<typeof Accordion> = {
    title: 'Starter/Accordion',
    component: Accordion,
  };

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
    args: {
      // ADD ARGS HERE
      title: 'Accordion Example',
      message:'Lorem Ipsum Dolor Sit Amet'
    },
  };

  export const WithSubtitle: Story = {
    args: {
      // ADD ARGS HERE
      title: 'Accordion Example',
      subtitle:'Lorem Ipsum Dolor Sit Amet',
      message:'Lorem Ipsum Dolor Sit Amet'
    },
  };

  export const WithIcon: Story = {
    args: {
      // ADD ARGS HERE
      title: 'Accordion Example',
      icon:'ri-school-line',
      message:'Lorem Ipsum Dolor Sit Amet'
    },
  };

  export const WithIcoAndSubtitle: Story = {
    args: {
      // ADD ARGS HERE
      title: 'Accordion Example 2',
      subtitle:'Lorem Ipsum Dolor Sit Amet',
      icon:'ri-school-line',
      message:'Lorem Ipsum Dolor Sit Amet'
    },
  };