import type { Meta, StoryObj } from "@storybook/react";

import SelectField from '../SelectField';

const meta: Meta<typeof SelectField> = {
    title: "Andromeda/Forms/Select",
    component: SelectField,
};

export default meta;
type Story = StoryObj<typeof SelectField>;

export const SelectFieldExample: Story = {
    args: {
        label:'Country',
        name:"country",
        isMulti:false,
        disabled: false,
        help: '',
        options:[
            { label: "Grapes 🍇", value: "grapes" },
            { label: "Mango 🥭", value: "mango" },
            { label: "Strawberry 🍓", value: "strawberry" },
            { label: "Watermelon 🍉", value: "watermelon" },
            { label: "Pear 🍐", value: "pear", disabled: true },
            { label: "Apple 🍎", value: "apple" },
            { label: "Tangerine 🍊", value: "tangerine" },
            { label: "Pineapple 🍍", value: "pineapple" },
            { label: "Peach 🍑", value: "peach" }
        ],
    },
  };

  export const SelectFieldMultiExample: Story = {
    args: {
        label:'Work',
        name:"register.work",
        isMulti:true,
        disabled: false,
        help: '',
        options:[
            { label: "Grapes 🍇", value: "grapes" },
            { label: "Mango 🥭", value: "mango" },
            { label: "Strawberry 🍓", value: "strawberry" },
            { label: "Watermelon 🍉", value: "watermelon" },
            { label: "Pear 🍐", value: "pear", disabled: true },
            { label: "Apple 🍎", value: "apple" },
            { label: "Tangerine 🍊", value: "tangerine" },
            { label: "Pineapple 🍍", value: "pineapple" },
            { label: "Peach 🍑", value: "peach" }
        ],
    },
  };