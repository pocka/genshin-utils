import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import {
  RiLoginCircleLine,
  RiEditBoxLine,
  RiDeleteBinLine,
} from "react-icons/ri";
import styled from "styled-components";

import { Button } from "./Button";
import { ModalDialog } from "./ModalDialog";
import { ProfileForm } from "./ProfileForm";
import { Profile, ProfileSetter } from "../states/ProfileList";
import { formatTzOffset } from "../utils/timezone";

const Title = styled.h1`
  font-size: 2.4rem;

  font-weight: bold;
`;

const List = styled.ul`
  margin-block-start: 4em;
`;

const ListItem = styled.li`
  margin-block-start: 2em;
  padding: 0.5em 0.8em;
  border-left: 1.6rem solid var(--color-asbestos);
  border-bottom: 0.2rem solid var(--color-asbestos);

  border-bottom-left-radius: 0.2rem;

  &[data-current="current"] {
    border-color: var(--theme-primary);
  }
`;

const ProfileAction = styled(Button)`
  margin-block-start: 0.5em;
`;

const ProfileActions = styled.div`
  margin-block-start: 1.5em;
  font-size: 0.8em;

  text-align: end;

  & > :not(:first-child) {
    margin-inline-start: 0.5em;
  }
`;

const ProfileName = styled.span`
  display: block;
  font-size: 1.1em;

  font-weight: bold;
`;

const ServerInfo = styled.span`
  display: block;
  font-size: 0.9em;
  margin-block-start: 0.2em;

  color: var(--theme-fg-sub);
`;

const DialogTitle = styled.h1`
  font-size: 1.2em;
  margin-block-end: 1.6rem;

  font-weight: bold;
`;

const DialogButton = styled(Button)`
  margin-block-start: 1.6rem;
  width: 100%;
`;

const CreateButton = styled(Button)`
  margin-block-start: 6.4rem;
  width: 100%;
`;

type ProfileListItemProps = Pick<
  ProfileListProps,
  "mutating" | "onChangeCurrent" | "onDelete" | "onEdit"
> & {
  profile: Profile;
};

const ProfileListItem = ({
  mutating,
  profile,
  onChangeCurrent,
  onDelete,
  onEdit,
}: ProfileListItemProps) => {
  const [editDialogVisible, setEditDialogVisible] = useState(false);
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);

  const closeDialog = useCallback(() => {
    if (mutating) {
      return;
    }

    setEditDialogVisible(false);
    setDeleteDialogVisible(false);
  }, [mutating]);

  // Close dialogs after complete mutation
  useEffect(() => {
    closeDialog();
  }, [mutating]);

  return (
    <ListItem data-current={profile.isCurrent ? "current" : null}>
      <div>
        <ProfileName>{profile.name}</ProfileName>
        <ServerInfo>
          {profile.server.name} (UTC
          {formatTzOffset(profile.server.tzOffset)})
        </ServerInfo>
      </div>
      <ProfileActions>
        {!profile.isCurrent && (
          <ProfileAction
            disabled={mutating}
            onClick={() => onChangeCurrent(profile)}
          >
            <RiLoginCircleLine /> Select
          </ProfileAction>
        )}
        <ProfileAction
          disabled={mutating}
          onClick={() => setEditDialogVisible(true)}
        >
          <RiEditBoxLine /> Edit
        </ProfileAction>
        <ProfileAction
          variant="danger"
          disabled={mutating}
          onClick={() => setDeleteDialogVisible(true)}
        >
          <RiDeleteBinLine /> Delete
        </ProfileAction>
      </ProfileActions>
      <ModalDialog
        opened={editDialogVisible}
        aria-labelledby={`edit_dialog_${profile.id}`}
        onClose={closeDialog}
      >
        <DialogTitle id={`edit_dialog_${profile.id}`}>
          Edit "{profile.name}"
        </DialogTitle>
        <ProfileForm
          initialData={profile}
          loading={mutating}
          onSubmit={(payload) =>
            onEdit({
              ...profile,
              ...payload,
            })
          }
        />
        <DialogButton disabled={mutating} onClick={closeDialog}>
          Cancel
        </DialogButton>
      </ModalDialog>
      <ModalDialog
        opened={deleteDialogVisible}
        aria-labelledby={`delete_dialog_${profile.id}`}
        onClose={closeDialog}
      >
        <DialogTitle id={`delete_dialog_${profile.id}`}>
          Delete "{profile.name}"?
        </DialogTitle>
        <DialogButton
          loading={mutating}
          variant="danger"
          onClick={() => onDelete(profile)}
        >
          Delete
        </DialogButton>
        <DialogButton disabled={mutating} onClick={closeDialog}>
          Cancel
        </DialogButton>
      </ModalDialog>
    </ListItem>
  );
};

export interface ProfileListProps {
  list: readonly Profile[];

  mutating?: boolean;

  onCreate(profile: ProfileSetter): void;
  onChangeCurrent(next: Profile): void;
  onDelete(profile: Profile): void;
  onEdit(profile: Profile): void;
}

export const ProfileList = ({
  list,
  mutating,
  onCreate,
  onChangeCurrent,
  onDelete,
  onEdit,
  ...rest
}: ProfileListProps) => {
  const [newProfileDialogVisible, setNewProfileDialogVisible] = useState(false);

  const closeNewProfileDialog = useCallback(() => {
    if (mutating) {
      return;
    }

    setNewProfileDialogVisible(false);
  }, [mutating]);

  // Close append dialog after complete appending
  useEffect(() => {
    closeNewProfileDialog();
  }, [mutating]);

  return (
    <div {...rest}>
      <Title>Your profiles</Title>
      <List>
        {list.map((profile) => (
          <ProfileListItem
            key={profile.id}
            profile={profile}
            mutating={mutating}
            onChangeCurrent={onChangeCurrent}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </List>
      <CreateButton
        disabled={mutating}
        onClick={() => setNewProfileDialogVisible(true)}
      >
        Create new profile
      </CreateButton>
      {newProfileDialogVisible && (
        <ModalDialog
          opened={newProfileDialogVisible}
          onClose={closeNewProfileDialog}
        >
          <DialogTitle id="new_profile_dialog">New profile</DialogTitle>
          <ProfileForm loading={mutating} onSubmit={onCreate} />
          <DialogButton disabled={mutating} onClick={closeNewProfileDialog}>
            Cancel
          </DialogButton>
        </ModalDialog>
      )}
    </div>
  );
};
