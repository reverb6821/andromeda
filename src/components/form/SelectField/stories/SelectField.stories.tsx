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
            {label:'Italy', value: 'IT'},
            {label:'France', value: 'FR'},
            {label:'Spain', value: 'SP'},
            {label:'Germany', value: 'DE'},
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
            { value: "Developer", label: "dev" },
            { value: "Tester", label: "tester" },
            { value: "Analyst", label: "analyst" },
        ],
    },
  };