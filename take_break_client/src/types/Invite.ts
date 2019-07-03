import { ID, DateSet, valueof } from './Basic';

export type InviteStatus = {
  Waiting: 100;
  Approval: 200;
  Reject: 300;
};

export type Invite = {
  id: ID;
  userId: ID;
  managedUserId: ID;
  organizationId: ID;
  status: valueof<InviteStatus>;
  jobDescription: string;
} & DateSet;
