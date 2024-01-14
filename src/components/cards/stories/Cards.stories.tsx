import type { Meta, StoryObj } from "@storybook/react";

import Cards from '../Cards';

const meta: Meta<typeof Cards> = {
    title: "Andromeda/ui/Cards",
    component: Cards,
  };

export default meta;
type Story = StoryObj<typeof Cards>;

export const WithImage: Story = {
    args: {
        title: "With Image",
        subtitle: 'Lorem Ipsum Dolor sit Amet',
        action:  () => null,
        actionLabel:'Go To Page',
        image: 'imgpath',
    },
  };
  export const WithoutImage: Story = {
    args: {
        title: 'Without Image',
        subtitle: 'Lorem Ipsum Dolor sit Amet',
        action:  () => null,
        actionLabel: 'Go To Page',
    },
  };