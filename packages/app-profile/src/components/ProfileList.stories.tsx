import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import * as React from "react";

import { ProfileList, ProfileListProps } from "./ProfileList";
import { PageLayout } from "./PageLayout";

export default {
  title: "ProfileList",
  component: ProfileList,
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
  args: {
    list: [
      {
        id: "foo",
        name: "Foo",
        server: {
          name: "Asia",
          tzOffset: +8,
        },
        color: "#f00",
        isCurrent: true,
      },
      {
        id: "bar",
        name: "Bar",
        server: {
          name: "Europe",
          tzOffset: +1,
        },
        color: "#0ff",
        isCurrent: false,
      },
      {
        id: "baz",
        name: "Baz",
        server: {
          name: "Asia",
          tzOffset: +8,
        },
        isCurrent: false,
      },
    ],
  },
} as Meta<ProfileListProps>;

const Template: Story<ProfileListProps> = (args) => (
  <ProfileList
    {...args}
    onCreate={action("onCreate")}
    onChangeCurrent={action("onChangeCurrent")}
    onDelete={action("onDelete")}
    onEdit={action("onEdit")}
  />
);

export const Default = Template.bind({});
