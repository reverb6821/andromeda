import type { Meta, StoryObj } from "@storybook/react";

import Footer from './Footer';

const meta: Meta<typeof Footer> = {
    title: "Footer",
    component: Footer,
  };

export default meta;
type Story = StoryObj<typeof Footer>;

export const FooterExample: Story = {
    args: {
        footerTitle:'Andromeda',
        footerEl: [
            {label: 'Services', route: '/services'},
            {label: 'About', route: '/about'},
            {label: 'Contact', route: '/contact'}
        ]
    }
}