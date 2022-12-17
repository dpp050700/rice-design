import Button from '../components/Button/button';
import message from '../components/Message';
import React from 'react';

const MessageDemo = () => {
  return (
    <div>
      <div>
        <p>基础用法</p>
        <Button
          type="primary"
          onClick={() => {
            message.open('这是一条消息提醒');
          }}
        >
          普通使用
        </Button>
        <Button
          type="primary"
          onClick={() => {
            message.open({
              content: '这是一条消息提醒 2s 消失',
              duration: 2
            });
          }}
        >
          普通使用
        </Button>
      </div>
      <div>
        <p>使用场景</p>
        <Button
          type="danger"
          onClick={() => {
            message.error('数据请求失败');
          }}
        >
          Error
        </Button>
        <Button
          type="primary"
          onClick={() => {
            message.loading('加载中');
          }}
        >
          Loading
        </Button>
        <Button
          type="info"
          onClick={() => {
            message.info('这是一条系统消息');
          }}
        >
          Info
        </Button>
        <Button
          type="warning"
          onClick={() => {
            message.warning('这是一条警告消息');
          }}
        >
          Warning
        </Button>
        <Button
          type="success"
          onClick={() => {
            message.success('这是一条成功消息');
          }}
        >
          Success
        </Button>
      </div>
    </div>
  );
};
export default MessageDemo;
