import type { Meta, StoryObj } from "@storybook/react";

import Grid from './Grid';

const meta: Meta<typeof Grid> = {
    title: "Andromeda/UI/Grid",
    component: Grid,
  };

export default meta;
type Story = StoryObj<typeof Grid>;

export const GridExample: Story = {
    args: {
        direction: 'column',
        classNames: 'bg-slate-400 w-full h-full',
        children: (
            <>
                <div className='bg-emerald-600 py-4 px-2 w-64 max-md:w-full'/>
                <div className='bg-sky-600 py-4 px-2 w-64 max-md:w-full'/>
                <div className='bg-yellow-600 py-4 px-2 w-64 max-md:w-full'/>
                <div className='bg-red-600 py-4 px-2 w-64 max-md:w-full'/>
            </>
        )
    }
}