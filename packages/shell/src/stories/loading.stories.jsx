import { useEffect, useMemo } from "react";
import { ShellLoading } from "../shell-loading";

export default {
  title: "Loading",
  args: {
    color: "#ddd",
  },
  argTypes: {
    color: {
      control: {
        type: "color",
      },
    },
  },
  parameters: {
    layout: "centered",
  },
};

export const Default = ({ color }) => {
  const TagName = useMemo(() => {
    return `shell-loading-${new Date().valueOf()}`;
  }, []);

  useEffect(() => {
    customElements.define(TagName, class extends ShellLoading {});
  }, [TagName]);

  return <TagName style={{ color }} />;
};
