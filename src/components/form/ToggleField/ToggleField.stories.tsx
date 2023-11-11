import type { Meta, StoryObj } from "@storybook/react";

import ToggleField from './ToggleField';

const meta: Meta<typeof ToggleField> = {
    title: "Andromeda/Forms/ToggleField",
    component: ToggleField,
};
  
export default meta;
type Story = StoryObj<typeof ToggleField>;

export const ToggleFieldExample: Story = {
    args: {
      label: 'Active',
      model: 'login.active',
      disabled: false,
    },
  };