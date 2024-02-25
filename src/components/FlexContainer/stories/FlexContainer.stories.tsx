import type { Meta, StoryObj } from '@storybook/react';

import FlexContainer  from '../FlexContainer';

const meta: Meta<typeof FlexContainer> = {
    title: 'Starter/FlexContainer',
    component: FlexContainer,
  };

export default meta;
type Story = StoryObj<typeof FlexContainer>;

export const Column: Story = {
    args: {
      // ADD ARGS HERE
      direction: 'column',
        className: 'bg-slate-400 w-full h-auto',
        children: (
            <>
                <div className='bg-emerald-600 py-4 px-2 w-32 max-md:w-full m-1 p-2.5'/>
                <div className='bg-sky-600 py-4 px-2 w-32 max-md:w-full m-1 p-2.5'/>
                <div className='bg-yellow-600 py-4 px-2 w-32 max-md:w-full m-1 p-2.5'/>
                <div className='bg-red-600 py-4 px-2 w-32 max-md:w-full m-1 p-2.5'/>
            </>
        )
    },
  };

export const ColumnReverse: Story = {
    args: {
      // ADD ARGS HERE
      direction: 'column-reverse',
        className: 'bg-slate-400 w-full h-auto',
        children: (
            <>
                <div className='bg-emerald-600 py-4 px-2 w-32 max-md:w-full m-1 p-2.5'/>
                <div className='bg-sky-600 py-4 px-2 w-32 max-md:w-full m-1 p-2.5'/>
                <div className='bg-yellow-600 py-4 px-2 w-32 max-md:w-full m-1 p-2.5'/>
                <div className='bg-red-600 py-4 px-2 w-32 max-md:w-full m-1 p-2.5'/>
            </>
        )
    },
  };

  export const Row: Story = {
    args: {
      // ADD ARGS HERE
      direction: 'row',
        className: 'bg-slate-400 w-full h-auto',
        children: (
            <>
                <div className='bg-emerald-600 py-4 px-2 w-32 max-md:w-full m-1 p-2.5'/>
                <div className='bg-sky-600 py-4 px-2 w-32 max-md:w-full m-1 p-2.5'/>
                <div className='bg-yellow-600 py-4 px-2 w-32 max-md:w-full m-1 p-2.5'/>
                <div className='bg-red-600 py-4 px-2 w-32 max-md:w-full m-1 p-2.5'/>
            </>
        )
    },
  };

  export const RowReverse: Story = {
    args: {
      // ADD ARGS HERE
      direction: 'row-reverse',
        className: 'bg-slate-400 w-full h-auto',
        children: (
            <>
                <div className='bg-emerald-600 py-4 px-2 w-32 max-md:w-full m-1 p-2.5'/>
                <div className='bg-sky-600 py-4 px-2 w-32 max-md:w-full m-1 p-2.5'/>
                <div className='bg-yellow-600 py-4 px-2 w-32 max-md:w-full m-1 p-2.5'/>
                <div className='bg-red-600 py-4 px-2 w-32 max-md:w-full m-1 p-2.5'/>
            </>
        )
    },
  };