import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const DeleteUser = ({ handleRemoveClick }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleOk = () => {
    handleRemoveClick()
    setIsModalVisible(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Delete
      </Button>
      <Modal title="Delete user" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Are you sure you want to delete the user?</p>
      </Modal>
    </>
  );
};

export default DeleteUser;