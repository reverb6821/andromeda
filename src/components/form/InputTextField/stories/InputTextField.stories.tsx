import type { Meta, StoryObj } from "@storybook/react";

import InputTextField from '../InputTextField';

const meta: Meta<typeof InputTextField> = {
    title: "Andromeda/Forms/Input Text Field",
    component: InputTextField,
};
  
export default meta;
type Story = StoryObj<typeof InputTextField>;

export const InputTextFieldExample: Story = {
    args: {
      label: 'email',
      icon: 'ri-mail-send-line',
      helper: 'Lorem Ipsum',
      model: 'login.email',
      onChange: () => console.log("Button"),
    },
  };