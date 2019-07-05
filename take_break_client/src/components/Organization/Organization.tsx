import * as React from 'react';
import OrganizationRegistration from './OrganizationRegistration/OrganizationRegistration';
import { ActionType } from '../../../pages/organizations';
import Link from 'next/link';
import OrganizationSearch from './OrganizationSearch/OrganizationSearch';

interface IProps {
  action: ActionType;
}

const Organization: React.FunctionComponent<IProps> = props => {
  switch (props.action) {
    case 'registration':
      return <OrganizationRegistration />;
    case 'search':
      return <OrganizationSearch />;
    default:
      return (
        <div className="Organization">
          <ul>
            <li>
              <Link href="/organizations/registration">
                <a>Registration</a>
              </Link>
            </li>
            <li>
              <Link href="/organizations/search">
                <a>Search</a>
              </Link>
            </li>
          </ul>
        </div>
      );
  }
};

export default Organization;
