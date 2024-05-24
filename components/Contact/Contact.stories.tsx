import type { Meta, StoryObj } from "@storybook/react";
import Contact from "./Contact";

const meta: Meta<typeof Contact> = {
  title: "Contact",
  component: Contact,
};

type Story = StoryObj<typeof Contact>;

export const Default: Story = {
  render: () => <Contact />,
};

export default meta;
