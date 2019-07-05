import Link from 'next/link';
import * as React from 'react';
import { ActionType } from '../../../pages/organizations';
import OrganizationRegistration from './OrganizationRegistration';

interface IProps {
  action: ActionType;
}

const Organization: React.FunctionComponent<IProps> = props => {
  switch (props.action) {
    case 'registration':
      return <OrganizationRegistration />;
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
