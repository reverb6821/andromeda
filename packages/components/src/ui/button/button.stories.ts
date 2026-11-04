import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './define.js';

const meta: Meta = {
  title: 'Components/Button',
  component: 'and-button',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    disabled: { control: 'boolean' },
  },
  render: (args) => html`
    <and-button variant=${args.variant} ?disabled=${args.disabled}>Click me</and-button>
  `,
};
export default meta;

export const Primary: StoryObj = { args: { variant: 'primary', disabled: false } };
export const Secondary: StoryObj = { args: { variant: 'secondary' } };
export const Disabled: StoryObj = { args: { disabled: true } };