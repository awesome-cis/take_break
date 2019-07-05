import { NextFunctionComponent } from 'next';
import * as React from 'react';
import Organization from 'components/Organization';

export enum ActionType {
  REGISTRATION = 'registration',
  SEARCH = 'search'
}

export type PageParamsType = {
  action: ActionType;
};

type Props = {
  children?: React.ReactNode;
  action: ActionType;
};

const OrganizationsPage: NextFunctionComponent<
  Props,
  PageParamsType
> = props => <Organization action={props.action} />;

OrganizationsPage.getInitialProps = (props): PageParamsType => {
  return {
    action: props.query.action as ActionType
  };
};

export default OrganizationsPage;
