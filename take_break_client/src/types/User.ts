import { ID, DateSet } from './Basic';

export type User = {
  id: ID;
  username: string;
  email: string;
  slug: string;
  password?: string;
  provider?: string | null;
  oAuthId?: string | null;
  bio?: string | null;
  profileImage?: string | null;
} & DateSet;
