import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from '../CheckboxField';

const meta: Meta<typeof Checkbox> = {
    title: "Andromeda/Forms/Checkbox",
    component: Checkbox,
};
  
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const CheckboxExample: Story = {
    args: {
      label: 'Terms & Conditions',
      model: 'login.termsAndConditions',
      disabled: false,
      tooltipText: ''
    },
  };