import * as React from 'react';
import { Modal, Button, Input } from 'antd';

type Props = {
  visible: boolean;
  onOk(e: React.MouseEvent<any, MouseEvent>): void;
  onCancel(e: React.MouseEvent<any, MouseEvent>): void;
};

const OrganizationJoinModal: React.FC<Props> = props => {
  const { visible, onOk, onCancel } = props;

  return (
    <Modal
      visible={visible}
      title="정말 이 조직에 가입하시겠어요?"
      onOk={onOk}
      onCancel={onCancel}
      maskClosable={false}
      footer={[
        <Button key="back" onClick={onCancel}>
          취소
        </Button>,
        <Button key="submit" type="primary" onClick={onOk}>
          확인
        </Button>
      ]}
    >
      <Input placeholder="조직 관리자에게 전달할 정보 (담당 업무, 부서 등...)" />
    </Modal>
  );
};

export default OrganizationJoinModal;
