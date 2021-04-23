import * as React from "react";
import styled from "styled-components";

import { ProfileForm } from "./ProfileForm";
import { ProfileSetter } from "../states/ProfileList";

const Heading = styled.h1`
  font-size: 2.4rem;

  font-weight: bold;
`;

const Section = styled.section`
  margin-block-start: 4.8rem;
  font-size: 0.9em;
`;

const H2 = styled.h2`
  font-size: 1.4em;

  font-weight: bold;
`;

const Paragraph = styled.p`
  margin-block-start: 1.6rem;
  line-height: 1.4;
`;

const Form = styled(ProfileForm)`
  margin-block-start: 4rem;
`;

const List = styled.ul`
  margin-block-start: 2.4rem;
  padding-inline-start: 1em;

  list-style: disc;
`;

const ListItem = styled.li`
  line-height: 1.4;
`;

export interface NoProfilesProps {
  onAppend(profile: ProfileSetter): void;
}

export const NoProfiles = ({ onAppend }: NoProfilesProps) => {
  return (
    <div>
      <Heading>Create a profile to start!</Heading>
      <Section>
        <H2>Important notice</H2>
        <Paragraph>
          This is unofficial, fan-made utility web app for Genshin Impact. This
          app/website is not affiliated with miHoYo Limited.
        </Paragraph>
      </Section>
      <Form onSubmit={onAppend} />
      <Section>
        <H2>Data lifespan</H2>
        <Paragraph>
          The profile and every other information you input will be stored only
          inside your browser. Some browsers will delete browser's local storage
          based on their own policy and rules, without users' permission.
        </Paragraph>
        <Paragraph>
          Unfortunately, we web developers can do nothing against this
          non-standard behaviour. If you want to make sure your data will not be
          deleted automatically, please follow one of below:
        </Paragraph>
        <List>
          <ListItem>Open this app at least a once per week</ListItem>
          <ListItem>Pin this site to your homescreen</ListItem>
        </List>
      </Section>
      <Section>
        <H2>Why do I need to choose a server?</H2>
        <Paragraph>
          We use that info to know when we reset our spawn timers and random
          event/quest counters.
        </Paragraph>
      </Section>
      <Section>
        <H2>Should I use the same name in Genshin account?</H2>
        <Paragraph>
          No. This unofficial app is not affiliated with miHoYo Limited, hence
          no account association nor data sharing occurs. The name is for you to
          identify multiple profiles later.
        </Paragraph>
      </Section>
    </div>
  );
};
