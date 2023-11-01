import type { Meta, StoryObj } from "@storybook/react";

import Button from './Button';

const meta: Meta<typeof Button> = {
    title: "Button",
    component: Button,
  };

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
      onBtnClick:() => console.log("Button"),
      btnStyle: 'primary',
      type:"submit",
      label:'CONFIRM',
      icon:"ri-mail-send-line",
      disabled: false,
      isLoading: false,
    },
  };
  export const Secondary: Story = {
    args: {
        onBtnClick:() => console.log("Button"),
        btnStyle: 'secondary',
        type:"submit",
        label:'CONFIRM',
        disabled: false,
        isLoading: false,
    },
  };