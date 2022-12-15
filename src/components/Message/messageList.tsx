import React, { useState } from 'react';
import MessageItem from './messageItem';

interface MessageListRef {
  open: (config: OpenConfig) => void;
}

interface MessageListProps {
  className?: string;
}

export interface OpenConfig {
  content: string;
  key?: React.Key;
}

const MessageList = React.forwardRef<MessageListRef, MessageListProps>(
  (props, ref) => {
    const { className } = props;
    const [list, setList] = useState<OpenConfig[]>([]);

    const onCloseItem = (key: React.Key) => {
      setList((prevState) => {
        return prevState.filter((item) => item.key !== key);
      });
    };

    React.useImperativeHandle(ref, () => {
      return {
        open: (config: OpenConfig) => {
          setList((prevState) => {
            const clone = [...prevState];
            clone.push(config);

            return clone;
          });
        }
      };
    });

    return (
      <div className="message">
        {list.map((item, index) => {
          return (
            <MessageItem
              content={item.content}
              key={item.key}
              onClose={onCloseItem}
              eventKey={item.key!}
            />
          );
        })}
      </div>
    );
  }
);

MessageList.displayName = 'MessageList';

export default MessageList;
