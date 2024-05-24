import type { Meta, StoryObj } from "@storybook/react";
import Services from "./Services";

const meta: Meta<typeof Services> = {
  title: "Services",
  component: Services,
};

type Story = StoryObj<typeof Services>;

export const Default: Story = {
  render: () => <Services />,
};

export default meta;
