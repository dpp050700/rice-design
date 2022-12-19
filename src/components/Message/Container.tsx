import React, { useState } from 'react';
import Message from './Message';
import { MessageProps } from './interface';

export interface ContainerRef {
  open: (config: OpenConfig) => void;
  close: (key: MessageProps['key']) => void;
  destroy: () => void;
}

interface MessageContainerProps {
  top?: number;
  duration?: number;
}

export type OpenConfig = MessageProps;

const MessageContainer = React.forwardRef<ContainerRef, MessageContainerProps>(
  (props, ref) => {
    const [list, setList] = useState<OpenConfig[]>([]);

    const onCloseItem = (key: MessageProps['key']) => {
      const itemConfig = list.find((item) => item.key === key);
      itemConfig?.onClose?.();
      setList((prevState) => {
        return prevState.filter((item) => item.key !== key);
      });
    };

    React.useImperativeHandle(ref, () => {
      return {
        open: (config: OpenConfig) => {
          setList((prevState) => {
            const findItem = prevState.findIndex(
              (item) => item.key === config.key
            );
            if (findItem > -1) {
              const clone = [...prevState];
              clone[findItem] = config;
              return clone;
            }
            return [...prevState, config];
          });
        },
        close: (key: MessageProps['key']) => {
          onCloseItem(key);
        },
        destroy: () => {
          setList([]);
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
