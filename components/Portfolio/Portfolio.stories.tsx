import type { Meta, StoryObj } from "@storybook/react";
import Portfolio from "./Portfolio";

const meta: Meta<typeof Portfolio> = {
  title: "Portfolio",
  component: Portfolio,
};

type Story = StoryObj<typeof Portfolio>;

export const Default: Story = {
  render: () => <Portfolio />,
};

export default meta;
