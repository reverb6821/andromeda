import type { Meta, StoryObj } from "@storybook/react";

import PasswordField from './PasswordField';

const meta: Meta<typeof PasswordField> = {
    title: "Andromeda/Forms/Password Text Field",
    component: PasswordField,
};

export default meta;
type Story = StoryObj<typeof PasswordField>;

export const PasswordTextFieldExample: Story = {
    args: {
      label: 'Password',
      model: 'login.password',
      disabled: false,
      helper: ''
    },
  };