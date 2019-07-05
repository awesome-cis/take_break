import './styles.scss';

import { List } from 'antd';
import Search from 'antd/lib/input/Search';
import Text from 'antd/lib/typography/Text';
import * as React from 'react';
import { useState } from 'react';

import OrganizationSearchItem from '../OrganizationSearchItem';

const sampleItems: {
  id: number;
  name: string;
  description: string;
  link?: string;
  requested: boolean;
}[] = [
  {
    id: 1,
    name: '위워크 우리는 일한다 정말 긴 단어를 입력한다.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: 'https://www.samsung.co.kr',
    requested: false
  },
  {
    id: 2,
    name: 'Google',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: 'https://www.google.com',
    requested: true
  },
  {
    id: 3,
    name: 'Samsung',
    description: `가진 피고 하였으며, 아니다. 심장은 트고, 가진 이성은 있으랴? 보내는 이 예가 우리 쓸쓸하랴? 생명을 뜨거운지라, 봄날의 가지에 있는가? 미인을 그림자는 목숨을 두기 지혜는 청춘을 수 가슴에 산야에 보라. 앞이 사람은 주는 붙잡아 예가 봄바람을 듣기만 관현악이며, 든 보라. 그들의 스며들어 봄날의 앞이 따뜻한 풍부하게 창공에 때문이다. 없으면 있는 커다란 길을 이상의 그들의 교향악이다. 충분히 봄날의 봄바람을 황금시대의 교향악이다.

    그들에게 오아이스도 때까지 풀밭에 천고에 인생을 있는가? 든 풍부하게 품에 아름다우냐? 살 끓는 얼음에 풍부하게 있을 끓는 무엇이 붙잡아 것이다. 밥을 이상 트고, 황금시대의 방지하는 때문이다. 같으며, 만천하의 얼음 꽃이 방황하여도, 약동하다. 풀밭에 아니더면, 끓는 이것을 운다. 이상의 인간의 그들은 그들에게 것이다. 놀이 있음으로써 같이, 무엇을 품었기 따뜻한 가치를 위하여 있으랴? 피가 열락의 평화스러운 가는 것이다. 못하다 평화스러운 인생을 부패뿐이다.

    속에서 두손을 때까지 황금시대를 끝까지 용감하고 것이다. 발휘하기 길지 힘차게 인생을 힘있다. 그들의 불어 굳세게 것은 곳으로 이것이다. 바이며, 그들의 못하다 이상을 대한 이상, 가지에 장식하는 아니다. 용감하고 힘차게 이상이 동력은 운다. 쓸쓸한 귀는 긴지라 뜨거운지라, 장식하는 찬미를 이성은 교향악이다. 길을 가는 물방아 무엇을 위하여서. 인간이 귀는 아니더면, 할지니, 그들에게 것은 운다. 청춘은 그들의 별과 그들을 뜨고, 눈에 용기가 생의 우리 위하여서. 시들어 오아이스도 황금시대의 황금시대를 듣는다. 아니더면, 거선의 보배를 앞이 내는 위하여, 우리는 몸이 있을 때문이다.`,
    requested: false
  }
];

type Props = {};

// TODO: apply tab index
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
        onSearch={value => {
          // TOOD: 실제 검색 수행 로직
          console.log(value);
        }}
      />

      {!!searchText && (
        <List
          className="OrganizationSearch__resultList"
          itemLayout="horizontal"
          dataSource={sampleItems}
          renderItem={item => <OrganizationSearchItem {...item} />}
        />
      )}
    </div>
  );
};

export default OrganizationSearch;
