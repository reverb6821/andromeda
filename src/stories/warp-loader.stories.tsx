import type { Meta, StoryObj } from "@storybook/react";
import Loader from "@/registry/ui/warp-loader"; // Assicurati che il percorso sia corretto

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {};
