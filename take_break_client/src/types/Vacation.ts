import { ID, DateSet, valueof } from './Basic';

export type VacationStatus = {
  Waiting: 100;
  Approval: 200;
  Reject: 300;
};

export type VacationType = {
  HalfDayLeave: 100; // 반차
  PaidLeave: 200; // 연차
  OfficialLeave: 300; // 경조사
  HealthLeave: 400; // 보건휴가
  Etc: 500; // 기타
};

export type Vacation = {
  id: ID;
  memberId: ID;
  managedUserId: ID;
  startDate: Date;
  endDate: Date;
  type: valueof<VacationType>;
  content: string;
  status: valueof<VacationStatus>;
  period: number;
  rejectReason: string;
} & DateSet;
