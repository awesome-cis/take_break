import { ID, DateSet, valueof } from './Basic';

export type VacationCountType = {
  Addition: 100;
  Subtraction: 200;
};

export type VacationCount = {
  id: ID;
  memberId: ID;
  managedUserId: ID;
  description: string;
  amount: number;
  type: valueof<VacationCountType>;
} & DateSet;
