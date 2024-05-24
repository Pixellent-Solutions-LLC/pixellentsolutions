import type { Meta, StoryObj } from "@storybook/react";
import Testimonials from "./Testimonials";

const meta: Meta<typeof Testimonials> = {
  title: "Testimonials",
  component: Testimonials,
};

type Story = StoryObj<typeof Testimonials>;

export const Default: Story = {
  render: () => <Testimonials />,
};

export default meta;
