import Button from '../components/Button/button';
import notification from '../components/Notification';
import React from 'react';

const NotificationDemo = () => {
  return (
    <div>
      <div>
        <p>基础用法</p>
        <Button
          type="primary"
          onClick={() => {
            notification.open({ content: '这是一条消息提醒', key: '11' });
          }}
        >
          普通使用
        </Button>
      </div>
    </div>
  );
};
export default NotificationDemo;
