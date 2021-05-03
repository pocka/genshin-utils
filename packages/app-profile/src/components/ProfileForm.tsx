import * as React from "react";
import { useMemo, useState } from "react";
import { BlockPicker } from "react-color";
import styled from "styled-components";

import { Button } from "./Button";
import { Profile, ProfileSetter, GenshinServer } from "../states/ProfileList";
import { formatTzOffset } from "../utils/timezone";

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  grid-gap: 4rem 2.4rem;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
`;

const Label = styled.label`
  display: block;
  font-size: 0.8em;
  padding-left: 0.8rem;

  color: var(--theme-fg-sub);
`;

const Input = styled.input`
  display: block;
  border-bottom: 0.1rem solid var(--theme-fg-sub);
  padding: 0.8rem;

  &::placeholder {
    color: var(--color-asbestos);
  }

  &:focus {
    border-bottom-color: var(--theme-fg);

    & + ${Label} {
      color: var(--theme-fg);
    }
  }
`;

const Submit = styled(Button)`
  display: block;
  grid-column: 1 / -1;
`;

const Select = styled.select`
  display: block;
  border-bottom: 0.1rem solid var(--theme-fg-sub);
  padding: 0.8rem;

  &:focus {
    border-bottom-color: var(--theme-fg);

    & + ${Label} {
      color: var(--theme-fg);
    }
  }
`;

const ColorPicker = styled(BlockPicker)`
  // override react-color's style
  &&& {
    width: 100% !important; // the lib uses inline style (wtf)
    min-height: 10rem;
    margin-block-start: 0.8rem;
  }
`;

const servers: readonly GenshinServer[] = [
  {
    name: "America",
    tzOffset: -5,
  },
  {
    name: "Asia",
    tzOffset: 8,
  },
  {
    name: "Europe",
    tzOffset: 1,
  },
];

const PRESET_COLOR_VARS = [
  "--color-turquoise",
  "--color-green-sea",
  "--color-emerald",
  "--color-nephritis",
  "--color-peter-river",
  "--color-belize-hole",
  "--color-amethyst",
  "--color-wisteria",
  "--color-wet-asphalt",
  "--color-midnight-blue",
  "--color-sun-flower",
  "--color-orange",
  "--color-carrot",
  "--color-pumpkin",
  "--color-alizarin",
  "--color-pomegranate",
  "--color-clouds",
  "--color-silver",
  "--color-concrete",
  "--color-asbestos",
];

export interface ProfileFormProps {
  className?: string;

  initialData?: Profile;
  loading?: boolean;

  onSubmit(profile: ProfileSetter): void;
}

export const ProfileForm = ({
  initialData,
  loading,
  onSubmit,
  ...rest
}: ProfileFormProps) => {
  const [profileName, setProfileName] = useState(initialData?.name || "");
  const [server, setServer] = useState<GenshinServer>(
    () => initialData?.server || servers[1]!
  );
  const [color, setColor] = useState<string>(
    () =>
      initialData?.color ||
      getComputedStyle(document.documentElement)
        .getPropertyValue("--theme-primary")
        .trim() ||
      // just a random color (no special meanings)
      "#fa5310"
  );
  const colors = useMemo(() => {
    const style = getComputedStyle(document.documentElement);

    return PRESET_COLOR_VARS.map((varName) =>
      style.getPropertyValue(varName).trim()
    );
  }, []);

  return (
    <Form
      {...rest}
      onSubmit={(ev) => {
        ev.preventDefault();

        onSubmit({
          name: profileName,
          server,
          color,
        });
      }}
    >
      <FormItem>
        <Input
          id="profile_name"
          required
          disabled={loading}
          type="text"
          placeholder="mycharacter"
          value={profileName}
          onChange={(ev) => {
            setProfileName(ev.currentTarget.value);
          }}
        />
        <Label htmlFor="profile_name">Profile name (required)</Label>
      </FormItem>
      <FormItem>
        <Select
          id="server"
          required
          disabled={loading}
          value={server.name}
          onChange={(ev) => {
            const { value } = ev.currentTarget;
            setServer((prev) => servers.find((s) => s.name === value) || prev);
          }}
        >
          {servers.map((s) => (
            <option key={s.name} value={s.name}>
              {s.name} (UTC{formatTzOffset(s.tzOffset)})
            </option>
          ))}
        </Select>
        <Label htmlFor="server">Server location (select one)</Label>
      </FormItem>
      <FormItem>
        <ColorPicker
          color={color}
          colors={colors}
          triangle="hide"
          onChange={(color) => setColor(color.hex)}
        />
        <Label>Profile color (UI primary color)</Label>
      </FormItem>
      <Submit variant="primary" loading={loading}>
        {initialData ? "Update profile" : "Create new profile"}
      </Submit>
    </Form>
  );
};
