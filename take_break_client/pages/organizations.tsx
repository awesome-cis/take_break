import OrganizationRegistration from 'components/OrganizationRegistration/OrganizationRegistration';
import { NextFunctionComponent } from 'next';
import * as React from 'react';

type ActionType = 'register';

export type OrganizationPageParams = {
  action: ActionType;
};

type Props = {
  children?: React.ReactNode;
  action: ActionType;
};

const OrganizationsPage: NextFunctionComponent<
  Props,
  OrganizationPageParams
> = props => {
  switch (props.action) {
    case 'register':
      return <OrganizationRegistration />;
    default:
      return null;
  }
};

OrganizationsPage.getInitialProps = (props): OrganizationPageParams => {
  return {
    action: props.query.action as ActionType
  };
};

export default OrganizationsPage;
