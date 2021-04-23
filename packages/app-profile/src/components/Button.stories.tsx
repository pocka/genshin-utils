import type { Meta, Story } from "@storybook/react";
import * as React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";

import { Button, ButtonProps } from "./Button";

export default {
  title: "Button",
  component: Button,
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Icon: Story<ButtonProps> = (args) => (
  <Button {...args}>
    <RiCheckboxCircleFill />
  </Button>
);
Icon.args = {
  icon: true,
  title: "Button",
};
