import type { Meta, Story } from "@storybook/react";
import * as React from "react";

import { LoadingScreen } from "./LoadingScreen";
import { PageLayout } from "./PageLayout";

export default {
  title: "LoadingScreen",
  component: LoadingScreen,
  decorators: [
    (Story) => (
      <PageLayout>
        <Story />
      </PageLayout>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: Story = () => <LoadingScreen />;

export const Default = Template.bind({});
