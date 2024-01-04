import type { Meta, StoryObj } from "@storybook/react";
import { Provider  } from 'react-redux';


import Badge from '@/components/partials/badge/Badge';
import {TABLE_HEAD, TABLE_ROWS} from '@/mock/table'
import store from '@/store/store.ts';

import Table from '../Table';

const meta: Meta<typeof Table> = {
    title: "Andromeda/Data/Table",
    component: Table,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        )
    ]
  };

export default meta;

type Story = StoryObj<typeof Table>;

const tabledata = TABLE_ROWS.map((el)=>{
    const obj = {
      id: el.id,
      name: el.name,
      email: el.email,
      title: el.title,
      department: el.department,
      status:<Badge label={el.status} badgeStyle={el.status === 'Active' ? 'primary--success' : 'primary--alert'}/>,
      role: el.role,
      age: el.age,
      imgUrl: <img className="w-10 h-10 rounded-full" src={el.imgUrl} alt="Jese image" />
    }
    return Object.values(obj)
  })

export const TableExample:Story = {
    args: {
        model: 'User',
        columns:TABLE_HEAD,
        rows:tabledata,
        onEdit:()=>{alert('edit')},
        onDelete:()=>{alert('delete')},
    }
}