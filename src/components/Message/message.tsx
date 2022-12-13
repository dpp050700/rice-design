import React from 'react';
import { createRoot } from 'react-dom/client';
import classnames from 'classnames';
interface MessageProps {
  className?: string;
  content: string;
}

const messageType = ['success', 'error', 'info', 'warning', 'loading'];

const Message: React.FC<MessageProps> = (props) => {
  const { className, content } = props;
  const classes = classnames(className);

  return <div className={classes}>{content}</div>;
};

function openMessage(content: MessageProps['content']) {
  const body = document.body;
  const div = document.createElement('div');
  const messageInstance = React.createElement(Message, { content: content });
  const root = createRoot(div);
  body.appendChild(div);
  root.render(messageInstance);
  console.log(messageInstance);
}

type MessageType = typeof messageType[number];

type MessageMethods = Record<MessageType, any>;

const messageMethods: MessageMethods = {};

messageType.forEach((item) => {
  messageMethods[item] = openMessage;
});

export default messageMethods;
