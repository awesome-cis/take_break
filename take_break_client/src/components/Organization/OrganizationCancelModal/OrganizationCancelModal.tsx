import * as React from 'react';
import { Modal, Button } from 'antd';

type Props = {
  visible: boolean;
  onOk(e: React.MouseEvent<any, MouseEvent>): void;
  onCancel(e: React.MouseEvent<any, MouseEvent>): void;
};

const OrganizationJoinCancelModal: React.FC<Props> = ({
  visible,
  onOk,
  onCancel
}) => {
  return (
    <Modal
      visible={visible}
      title="가입 취소"
      footer={[
        <Button key="back" onClick={onCancel}>
          취소
        </Button>,
        <Button key="submit" type="primary" onClick={onOk}>
          확인
        </Button>
      ]}
    >
      정말 가입을 취소하시겠어요?
    </Modal>
  );
};

export default OrganizationJoinCancelModal;
