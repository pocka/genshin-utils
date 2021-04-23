import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import * as React from "react";

import { NoProfiles } from "./NoProfiles";
import { PageLayout } from "./PageLayout";

export default {
  title: "NoProfiles",
  component: NoProfiles,
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

const Template: Story = () => <NoProfiles onAppend={action("onAppend")} />;

export const Default = Template.bind({});
