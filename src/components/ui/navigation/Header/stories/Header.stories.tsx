import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from 'react-redux';

import Logo from '@/assets/logo-placeholder-image.png'
import store from '@/store/store.ts';

import Header from "../Header.tsx";

const meta: Meta<typeof Header> = {
    title: "Andromeda/UI/Header",
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
        headerLogo: Logo,
        headerTitle:'Andromeda',
        headerSubTitle:'A component Collection',
        headerEl: [
            {label: 'Home', route: ''},
            {label: 'About', route: '/about'},
            {label: 'Contact', route: '/contact'}
        ]
    }
}