import Button from '../components/Button/button';
import message from '../components/Message/message';
import React from 'react';

const MessageDemo = () => {
  return (
    <div>
      <Button type="primary" onClick={() => message.success(1112)}>
        success
      </Button>
    </div>
  );
};
export default MessageDemo;
