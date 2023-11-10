import type { Meta, StoryObj } from "@storybook/react";

import Typography from './Typography';

const meta: Meta<typeof Typography> = {
    title: "Andromeda/Typography/Typography",
    component: Typography,
};
export default meta;
type Story = StoryObj<typeof Typography>;

export const Regular: Story = {
    args: {
      textSize: 'regular',
      textStyle: 'primary',
      text: 'Lorem Ipsum Dolor sit amet' 
    },
  };

  export const Caption: Story = {
    args: {
        textSize: 'caption',
        textStyle: 'secondary',
        text: 'Lorem Ipsum Dolor sit amet' 
    },
  };