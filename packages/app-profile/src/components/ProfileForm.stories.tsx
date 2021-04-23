import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import * as React from "react";

import { ProfileForm, ProfileFormProps } from "./ProfileForm";

export default {
  title: "ProfileForm",
  component: ProfileForm,
} as Meta<ProfileFormProps>;

const Template: Story<ProfileFormProps> = (args) => (
  <ProfileForm {...args} onSubmit={action("onSubmit")} />
);

export const NewProfile = Template.bind({});

export const UpdateProfile = Template.bind({});
UpdateProfile.args = {
  initialData: {
    id: "foo",
    name: "Foo",
    server: {
      name: "Moon",
      tzOffset: -8,
    },
    isCurrent: true,
  },
};
