import React, { useState } from 'react';
import { Modal, Button } from 'antd';

export default function BasicModal () {
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const showModal = () => {
      console.log(isModalVisible)
    //   console.log('clicked')
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      {/* <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}> */}
      {isModalVisible && (
          <div className='modal'>

          </div>
      )}
    </>
  );
};