import * as React from 'react';
import { useState } from 'react';
import { Button, Card } from 'antd';
import OrganizationJoinModal from '../OrganizationJoinModal';
import OrganizationCancelModal from '../OrganizationCancelModal';

type Props = {
  name: string;
  description: string;
  link?: string;
  requested: boolean;
};

const OrganizationSearchItem: React.FC<Props> = props => {
  const { name, description, link, requested } = props;

  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  /**
   * 가입 요청시 사용할 함수들
   */
  const onClickJoinBtn = () => {
    setShowJoinModal(true);
  };

  const onClickJoinModalOkBtn = () => {
    // TODO: 가입 요청 처리
    setShowJoinModal(false);
  };

  const onClickJoinModalCancelBtn = () => {
    setShowJoinModal(false);
  };

  /**
   * 가입 취소시 사용할 함수들
   */
  const onClickCancelBtn = () => {
    setShowCancelModal(true);
  };

  const onClickCancelModalOkBtn = () => {
    // TODO: 가입 취소 요청 처리
    setShowCancelModal(false);
  };

  const onClickCancelModalCancelBtn = () => {
    setShowCancelModal(false);
  };

  return (
    <Card
      className="OrganizationSearchItem"
      title={name}
      bordered={true}
      extra={
        requested ? (
          <Button onClick={onClickCancelBtn}>요청 중</Button>
        ) : (
          <Button type="primary" onClick={onClickJoinBtn}>
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
          visible: showJoinModal,
          onOk: onClickJoinModalOkBtn,
          onCancel: onClickJoinModalCancelBtn
        }}
      />
      <OrganizationCancelModal
        {...{
          visible: showCancelModal,
          onOk: onClickCancelModalOkBtn,
          onCancel: onClickCancelModalCancelBtn
        }}
      />
    </Card>
  );
};

export default OrganizationSearchItem;
