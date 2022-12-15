import React, { ForwardedRef } from 'react';
import { createRoot } from 'react-dom/client';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import MessageList from './messageList';
import type { OpenConfig } from './messageList';

let messageIndex = 0;

type MessageType = 'success' | 'error' | 'info' | 'warning' | 'loading';

const messageType: MessageType[] = [
  'success',
  'error',
  'info',
  'warning',
  'loading'
];

type MethodType = typeof messageType[number] | 'open';

interface MessageProps {
  className?: string;
  type?: MessageType;
  content?: string;
  duration?: number;
  icon?: React.ReactNode;
  key?: string | number;
  onClose?: () => void;
  showIcon?: boolean;
  effect?: 'dark' | 'light' | 'plain';
}

type MessageTypeProps = Omit<MessageProps, 'type'>;

interface MessageInstance {
  open: (config: MessageProps) => void;
  success: (config: MessageTypeProps) => void;
  info: (config: MessageTypeProps) => void;
  error: (config: MessageTypeProps) => void;
  warning: (config: MessageTypeProps) => void;
  loading: (config: MessageTypeProps) => void;
}

interface GlobalMessage {
  fragment: DocumentFragment;
  instance?: MessageInstance | null;
}

type OpenMessage = (
  contentOrConfig: MessageProps['content'] | MessageProps,
  durationOrOnClose?: MessageProps['duration'] | MessageProps['onClose'],
  onClose?: MessageProps['onClose']
) => void;

interface MessageMethods {
  open: OpenMessage;
  success: OpenMessage;
  info: OpenMessage;
  error: OpenMessage;
  warning: OpenMessage;
  loading: OpenMessage;
}

let globalMessage: GlobalMessage | null = null;

const Message = React.forwardRef<any, MessageProps>((props, ref) => {
  const { className, content } = props;
  const classes = classnames(className, 'message');
  const holderRef = React.useRef<any>(null);

  React.useImperativeHandle(ref, () => {
    return {
      instance: {
        open: (config: OpenConfig) => {
          const { key, ...originConfig } = config;
          let resultKey = key;
          if (key === undefined || key === null) {
            messageIndex += 1;
            resultKey = `message-${messageIndex}`;
          }
          holderRef.current?.open({ key: resultKey, ...originConfig });
        }
      }
    };
  });

  return createPortal(<MessageList ref={holderRef} />, document.body);
});

Message.displayName = 'Message';

function openMessage(content: MessageProps['content']) {
  if (!globalMessage) {
    const fragment = document.createDocumentFragment();
    globalMessage = {
      fragment
    };
    const root = createRoot(fragment);
    root.render(
      <Message
        ref={(node: any) => {
          if (globalMessage !== null) {
            globalMessage.instance = node.instance;
            globalMessage.instance?.open({ content });
          }
        }}
      />
    );
    return;
  }

  globalMessage.instance?.open({ content: content });
}

const messageMethods: MessageMethods = {
  open: openMessage
} as MessageMethods;

messageType.forEach((item) => {
  messageMethods[item] = openMessage as any;
});

export default messageMethods;
