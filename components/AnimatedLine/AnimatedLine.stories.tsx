import type { Meta, StoryObj } from "@storybook/react";
import AnimatedLine from "./AnimatedLine";

const meta: Meta<typeof AnimatedLine> = {
  title: "AnimatedLine",
  component: AnimatedLine,
};

type Story = StoryObj<typeof AnimatedLine>;

export const Default: Story = {
  render: () => (
    <div style={{ height: '200vh', position: 'relative' }}>
      <AnimatedLine />
      <div id="hero" style={{ height: '50vh', backgroundColor: 'lightgray' }}>Hero Section</div>
      <div id="services" style={{ height: '50vh', backgroundColor: 'gray' }}>Services Section</div>
      <div id="portfolio" style={{ height: '50vh', backgroundColor: 'darkgray' }}>Portfolio Section</div>
      <div id="testimonials" style={{ height: '50vh', backgroundColor: 'dimgray' }}>Testimonials Section</div>
      <div id="contact" style={{ height: '50vh', backgroundColor: 'black', color: 'white' }}>Contact Section</div>
    </div>
  ),
};

export default meta;
