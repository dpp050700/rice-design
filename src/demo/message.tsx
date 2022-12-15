import Button from '../components/Button/button';
import message from '../components/Message/message';
import React from 'react';

const MessageDemo = () => {
  const messageNormal = () => {
    message.success('load success');
  };
  const messageOnClose = () => {
    message.success('load success', () => {
      alert('message closed');
    });
  };

  const messageOnDuration = () => {
    message.success('load success', 20, () => {
      alert('20s message closed');
    });
  };

  const messageOnConfig = () => {
    message.open({
      content: 'config content',
      duration: 10
    });
  };

  const noDisappear = () => {
    message.success('no disappear', 0);
  };

  return (
    <div>
      <Button type="primary" onClick={messageNormal}>
        普通使用
      </Button>
      <Button type="primary" onClick={messageOnClose}>
        关闭时触发回调函数
      </Button>
      <Button type="primary" onClick={messageOnDuration}>
        自定义消失时间
      </Button>
      <Button type="primary" onClick={noDisappear}>
        不自动消失
      </Button>
      <Button type="primary" onClick={messageOnConfig}>
        使用配置对象
      </Button>
    </div>
  );
};
export default MessageDemo;
