import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from 'react-redux';

import store from '@/store/store.ts';

import Header from "./Header.tsx";

const meta: Meta<typeof Header> = {
    title: "Header",
    component: Header,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        )
    ]
  };

export default meta;
type Story = StoryObj<typeof Header>;

export const HeaderExample: Story = {
    args: {
        headerTitle:'Andromeda',
        headerEl: [
            {label: 'Home', route: ''},
            {label: 'About', route: '/about'},
            {label: 'Contact', route: '/contact'}
        ]
    }
}