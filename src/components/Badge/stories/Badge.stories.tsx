import type { Meta, StoryObj } from '@storybook/react';

import Badge  from '../Badge';

const meta: Meta<typeof Badge> = {
    title: 'Starter/Badge',
    component: Badge,
  };

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
    args: {
      // ADD ARGS HERE
      badgeStyle: 'primary--info',
      label:'Lorem Ipsum Dolor sit amet',
    },
  };

  export const PrimaryIco: Story = {
    args: {
      // ADD ARGS HERE
      badgeStyle: 'primary--info',
      label:'Lorem Ipsum Dolor sit amet',
      icon:'ri-error-warning-line',
    },
};

  export const Alert: Story = {
    args: {
      // ADD ARGS HERE
      badgeStyle: 'primary--alert',
      label:'Lorem Ipsum Dolor sit amet',
    },
  };

  export const AlertIco: Story = {
    args: {
      // ADD ARGS HERE
      badgeStyle: 'primary--alert',
      label:'Lorem Ipsum Dolor sit amet',
      icon: 'ri-alert-line'
    },
  };

  export const Warn: Story = {
    args: {
      // ADD ARGS HERE
      badgeStyle: 'primary--warn',
      label:'Lorem Ipsum Dolor sit amet',
    },
  };

  export const WarnIco: Story = {
    args: {
      // ADD ARGS HERE
      badgeStyle: 'primary--warn',
      label:'Lorem Ipsum Dolor sit amet',
      icon: 'ri-error-warning-line'
    },
  };


  export const Success: Story = {
    args: {
      // ADD ARGS HERE
      badgeStyle: 'primary--success',
      label:'Lorem Ipsum Dolor sit amet',
    },
  };

  export const SuccessIco: Story = {
    args: {
      // ADD ARGS HERE
      badgeStyle: 'primary--success',
      label:'Lorem Ipsum Dolor sit amet',
      icon: 'ri-checkbox-circle-line'
    },
  };


export const Secondary: Story = {
  args: {
    // ADD ARGS HERE
    badgeStyle: 'secondary',
    label:'Lorem Ipsum Dolor sit amet',
  },
};

export const SecondaryIco: Story = {
  args: {
    // ADD ARGS HERE
    badgeStyle: 'primary--info',
    label:'Lorem Ipsum Dolor sit amet',
    icon:'ri-error-warning-line',
  },
};

export const SecondaryAlert: Story = {
  args: {
    // ADD ARGS HERE
    badgeStyle: 'secondary--alert',
    label:'Lorem Ipsum Dolor sit amet',
  },
};

export const SecondaryAlertIco: Story = {
  args: {
    // ADD ARGS HERE
    badgeStyle: 'primary--alert',
    label:'Lorem Ipsum Dolor sit amet',
    icon:'ri-alert-line',
  },
};


export const SecondaryWarn: Story = {
  args: {
    // ADD ARGS HERE
    badgeStyle: 'secondary--warn',
    label:'Lorem Ipsum Dolor sit amet',
  },
};

export const SecondaryWarnIco: Story = {
  args: {
    // ADD ARGS HERE
    badgeStyle: 'secondary--warn',
    label:'Lorem Ipsum Dolor sit amet',
    icon: 'ri-error-warning-line'
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
    badgeStyle: 'secondary--success',
    label:'Lorem Ipsum Dolor sit amet',
    icon:'ri-checkbox-circle-line',
  },
};