import { ID, DateSet, valueof } from './Basic';

export type MemberRole = {
  Owner: 100;
  Admin: 200;
  Member: 300;
};

export type Member = {
  id: ID;
  userId: ID;
  organizationId: ID;
  role: valueof<MemberRole>;
  jobDescription: string;
} & DateSet;
