import React from 'react';
import Container, { OpenConfig, ContainerRef } from './Container';
import { createPortal } from 'react-dom';
import { MessageProps } from './interface';

export interface MessageInstance {
  open: (config: MessageProps) => void;
}

let messageKeyIndex = 0;

interface InstanceRef {
  instance: any;
}

const Instance = React.forwardRef<InstanceRef>((props, ref) => {
  const containerRef = React.useRef<ContainerRef>(null);

  React.useImperativeHandle(ref, () => {
    return {
      instance: {
        open: (config: OpenConfig) => {
          const { key, ...originConfig } = config;
          let resultKey = key;
          if (key === undefined || key === null) {
            messageKeyIndex += 1;
            resultKey = `message-${messageKeyIndex}`;
          }
          containerRef.current?.open({ key: resultKey, ...originConfig });
        }
      }
    };
  });

  return createPortal(<Container ref={containerRef} />, document.body);
});

Instance.displayName = 'MessageInstance';

export default Instance;
