import * as React from 'react';
import { useState } from 'react';
import { Button, Card, Modal, Input } from 'antd';
import OrganizationJoinModal from '../OrganizationJoinModal';

type Props = {
  name: string;
  description: string;
  link?: string;
  requested: boolean;
};

const OrganizationSearchItem: React.FC<Props> = props => {
  const { name, description, link, requested } = props;

  const [showModal, setShowModal] = useState(false);

  const onClickRequestBtn = () => {
    setShowModal(true);
  };

  const onClickModalOkBtn = () => {
    // TODO: 가입 요청 처리
    setShowModal(false);
  };

  const onClickModalCancelBtn = () => {
    setShowModal(false);
  };

  return (
    <Card
      className="OrganizationSearchItem"
      title={name}
      bordered={true}
      extra={
        requested ? (
          <Button>요청 중</Button>
        ) : (
          <Button type="primary" onClick={onClickRequestBtn}>
            가입 요청
          </Button>
        )
      }
    >
      {description}

      {link && (
        <div>
          <a href={link} target="_blank">
            링크
          </a>
        </div>
      )}

      <OrganizationJoinModal
        {...{
          visible: showModal,
          onOk: onClickModalOkBtn,
          onCancel: onClickModalCancelBtn
        }}
      />
    </Card>
  );
};

export default OrganizationSearchItem;
