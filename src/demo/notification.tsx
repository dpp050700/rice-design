import Button from '../components/Button/button';
import notification from '../components/Notification';
import React from 'react';

const NotificationDemo = () => {
  const [notificationApi, contextHolder] = notification.useNotification();
  return (
    <div>
      <div>
        <p>基础用法</p>
        <Button
          type="primary"
          onClick={() => {
            notification.open({
              content: '这是一条消息提醒',
              title: '消息提醒'
            });
          }}
        >
          普通使用
        </Button>
      </div>
      <div>
        <p>Hooks</p>
        {contextHolder}
        <Button
          type="primary"
          onClick={() => {
            notificationApi.open({
              content: <div>1</div>,
              title: '消息提醒',
              duration: 3
            });
          }}
        >
          普通使用
        </Button>
      </div>
    </div>
  );
};
export default NotificationDemo;
