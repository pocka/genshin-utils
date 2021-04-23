import * as React from "react";
import { useState } from "react";
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

  return (
    <Form
      {...rest}
      onSubmit={(ev) => {
        ev.preventDefault();

        onSubmit({
          name: profileName,
          server,
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
      <Submit variant="primary" loading={loading}>
        {initialData ? "Update profile" : "Create new profile"}
      </Submit>
    </Form>
  );
};
