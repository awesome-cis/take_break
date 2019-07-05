export type RegisterValuesType = {
  username: string;
  email: string;
  slug: string;
  password: string;
  bio: string | undefined;
};

export type LoginValuesType = {
  email: string;
  password: string;
};
