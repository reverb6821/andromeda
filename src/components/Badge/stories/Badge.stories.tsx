import type { Meta, StoryObj } from '@storybook/react';

import Badge  from '../Badge';

const meta: Meta<typeof Badge> = {
    title: 'Starter/Badge',
    component: Badge,
  };

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
      // ADD ARGS HERE
      badgeStyle: 'primary--info',
      label:'Lorem Ipsum Dolor sit amet',
    },
  };

  export const Alert: Story = {
    args: {
      // ADD ARGS HERE
      badgeStyle: 'primary--alert',
      label:'Lorem Ipsum Dolor sit amet',
    },
  };

  export const Warn: Story = {
    args: {
      // ADD ARGS HERE
      badgeStyle: 'primary--warn',
      label:'Lorem Ipsum Dolor sit amet',
    },
  };

  export const Success: Story = {
    args: {
      // ADD ARGS HERE
      badgeStyle: 'primary--success',
      label:'Lorem Ipsum Dolor sit amet',
    },
  };

export const WithIco: Story = {
    args: {
      // ADD ARGS HERE
      badgeStyle: 'primary--info',
      label:'Lorem Ipsum Dolor sit amet',
      icon:'ri-error-warning-line',
    },
};

export const Secondary: Story = {
  args: {
    // ADD ARGS HERE
    badgeStyle: 'secondary',
    label:'Lorem Ipsum Dolor sit amet',
  },
};

export const SecondaryAlert: Story = {
  args: {
    // ADD ARGS HERE
    badgeStyle: 'secondary--alert',
    label:'Lorem Ipsum Dolor sit amet',
  },
};

export const SecondaryWarn: Story = {
  args: {
    // ADD ARGS HERE
    badgeStyle: 'secondary--warn',
    label:'Lorem Ipsum Dolor sit amet',
  },
};

export const SecondarySuccess: Story = {
  args: {
    // ADD ARGS HERE
    badgeStyle: 'secondary--success',
    label:'Lorem Ipsum Dolor sit amet',
  },
};

export const SecondaryWithIco: Story = {
  args: {
    // ADD ARGS HERE
    badgeStyle: 'secondary',
    label:'Lorem Ipsum Dolor sit amet',
    icon:'ri-error-warning-line',
  },
};