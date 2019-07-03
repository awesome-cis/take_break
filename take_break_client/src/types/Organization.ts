import { ID, DateSet, valueof } from './Basic';

export type OrganizationType = {
  Individual: 100;
  Company: 200;
};

export type Organization = {
  id: ID;
  name: string;
  description: string;
  link: string;
  type: valueof<OrganizationType>;
  isSearchable: boolean;
  isJoinable: boolean;
  isPublicHistory: boolean;
} & DateSet;
