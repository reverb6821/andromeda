import type { Meta, StoryObj } from "@storybook/react";

import CustomSelect from './CustomSelect';

const meta: Meta<typeof CustomSelect> = {
    title: "Andromeda/Forms/Select",
    component: CustomSelect,
};

export default meta;
type Story = StoryObj<typeof CustomSelect>;

export const CustomSelectExample: Story = {
    args: {
        label:'Country',
        name:"country",
        isMulti:false,
        disabled: false,
        help: '',
        options:[
            {label:'Italy', value: 'IT'},
            {label:'France', value: 'FR'},
            {label:'Spain', value: 'SP'},
            {label:'Germany', value: 'DE'},
        ],
    },
  };

  export const CustomMultiSelectExample: Story = {
    args: {
        label:'Work',
        name:"register.work",
        isMulti:true,
        disabled: false,
        help: '',
        options:[
            { value: "Developer", label: "dev" },
            { value: "Tester", label: "tester" },
            { value: "Analyst", label: "analyst" },
        ],
    },
  };