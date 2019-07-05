import './styles.scss';

import { List } from 'antd';
import Search from 'antd/lib/input/Search';
import Text from 'antd/lib/typography/Text';
import * as React from 'react';
import { useState } from 'react';

import OrganizationSearchItem from '../OrganizationSearchItem';

const items: {
  id: number;
  name: string;
  description: string;
  link?: string;
  requested: boolean;
}[] = [
  {
    id: 1,
    name: 'Samsung ELkjdlkafjsa slsllslsslsls jls dfaklfsjdf  ',
    description: 'Hello, this is Samsung Electronics.',
    link: 'https://www.samsung.co.kr',
    requested: false
  },
  {
    id: 2,
    name: 'Samsung',
    description: 'Hello, this is Samsung Electronics.',
    link: 'https://www.samsung.co.kr',
    requested: true
  },
  {
    id: 3,
    name: 'Samsung',
    description: 'Hello, this is Samsung Electronics.',
    requested: false
  }
];

type Props = {};

const OrganizationSearch: React.FC<Props> = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <div
      className={`
        OrganizationSearch
        OrganizationSearch--${!!searchText ? 'result' : 'main'}
      `}
    >
      {!searchText && (
        <Text className="OrganizationSearch__guide">
          조직명을 입력해주세요!
        </Text>
      )}
      <Search
        className="OrganizationSearch__searchBar"
        placeholder=""
        enterButton="검색"
        size="large"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        onSearch={value => console.log(value)}
      />

      {!!searchText && (
        <List
          className="OrganizationSearch__resultList"
          itemLayout="horizontal"
          dataSource={items}
          renderItem={item => <OrganizationSearchItem {...item} />}
        />
      )}
    </div>
  );
};

export default OrganizationSearch;
