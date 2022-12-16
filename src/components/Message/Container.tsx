import React, { useState } from 'react';
import Message from './Message';
import { MessageProps } from './interface';

export interface ContainerRef {
  open: (config: OpenConfig) => void;
}

interface MessageContainerProps {
  top?: number;
  duration?: number;
}

export type OpenConfig = MessageProps;

const MessageContainer = React.forwardRef<ContainerRef, MessageContainerProps>(
  (props, ref) => {
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
            <Message
              {...item}
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

MessageContainer.displayName = 'MessageContainer';

export default MessageContainer;
