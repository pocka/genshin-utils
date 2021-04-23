import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import * as React from "react";

import { ModalDialog, ModalDialogProps } from "./ModalDialog";

export default {
  title: "ModalDialog",
  component: ModalDialog,
  args: {
    opened: true,
  },
} as Meta<ModalDialogProps>;

const Template: Story<ModalDialogProps> = (args) => (
  <>
    <button>Link1</button>
    <button>Link2</button>
    <ModalDialog {...args} aria-labelledby="title" onClose={action("onClose")}>
      <p id="title">Dialog contents</p>
      <button>Link3</button>
      <button>Link4</button>
    </ModalDialog>
  </>
);

export const Default = Template.bind({});
