import type { Meta, StoryObj } from '@storybook/react';

import Alert  from '../Alert';

const meta: Meta<typeof Alert> = {
    title: 'Starter/Alert',
    component: Alert,
  };

export default meta;
type Story = StoryObj<typeof Alert>;

export const Danger: Story = {
    args: {
      // ADD ARGS HERE
      title: 'Alert!',
      alertStyle:'alert',
      message: 'Lorem Ipsum Dolor Sit Amet'
    },
};

export const DangerIcon: Story = {
  args: {
    // ADD ARGS HERE
    title: 'Alert!',
    alertStyle:'alert',
    message: 'Lorem Ipsum Dolor Sit Amet',
    icon: 'ri-alert-line'
  },
};

export const Success: Story = {
  args: {
    // ADD ARGS HERE
    title: 'Done!',
    alertStyle:'alert',
    message: 'Lorem Ipsum Dolor Sit Amet',
  },
};

export const SuccessIcon: Story = {
  args: {
    // ADD ARGS HERE
    title: 'Done!',
    alertStyle:'success',
    message: 'Lorem Ipsum Dolor Sit Amet',
    icon: 'ri-checkbox-circle-line'
  },
};

export const Warn: Story = {
  args: {
    // ADD ARGS HERE
    title: 'Warn!',
    alertStyle:'warn',
    message: 'Lorem Ipsum Dolor Sit Amet',
  },
};

export const WarnIcon: Story = {
  args: {
    // ADD ARGS HERE
    title: 'Warn!',
    alertStyle:'warn',
    message: 'Lorem Ipsum Dolor Sit Amet',
    icon: 'ri-error-warning-line'
  },
};

export const Info: Story = {
  args: {
    // ADD ARGS HERE
    title: 'Info!',
    alertStyle:'info',
    message: 'Lorem Ipsum Dolor Sit Amet',
  },
};

export const Infoicon: Story = {
  args: {
    // ADD ARGS HERE
    title: 'Info!',
    alertStyle:'info',
    message: 'Lorem Ipsum Dolor Sit Amet',
    icon: 'ri-info-i'
  },
};