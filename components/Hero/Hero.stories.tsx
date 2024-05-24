import type { Meta, StoryObj } from "@storybook/react";
import Hero from "./Hero";

const meta: Meta<typeof Hero> = {
  title: "Hero",
  component: Hero,
};

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  render: () => <Hero />,
};

export default meta;
