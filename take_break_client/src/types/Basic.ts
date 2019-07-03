export type ID = number;

export type DateSet = {
  deletedAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
};

export type valueof<T> = T[keyof T];
