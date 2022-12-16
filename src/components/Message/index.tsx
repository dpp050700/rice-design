import React from 'react';
import { createRoot } from 'react-dom/client';
import Instance, { MessageInstance } from './Instance';
import { MessageType, MessageProps } from './interface';

const messageType: MessageType[] = [
  'success',
  'error',
  'info',
  'warning',
  'loading'
];

type MessageTypeProps = Omit<MessageProps, 'type'>;

interface GlobalMessage {
  fragment: DocumentFragment;
  instance?: MessageInstance | null;
}

type OpenMessage<T> = (
  contentOrConfig: MessageProps['content'] | T,
  durationOrOnClose?: MessageProps['duration'] | MessageProps['onClose'],
  onClose?: MessageProps['onClose']
) => void;

interface MessageMethods {
  open: OpenMessage<MessageProps>;
  success: OpenMessage<MessageTypeProps>;
  info: OpenMessage<MessageTypeProps>;
  error: OpenMessage<MessageTypeProps>;
  warning: OpenMessage<MessageTypeProps>;
  loading: OpenMessage<MessageTypeProps>;
}

let globalMessage: GlobalMessage | null = null;

const open = (config: MessageProps) => {
  if (!globalMessage) return;
  globalMessage.instance?.open(config);
};

const formatMessageProp: (
  contentOrConfig: MessageProps['content'] | MessageProps,
  durationOrOnClose?: MessageProps['duration'] | MessageProps['onClose'],
  onClose?: MessageProps['onClose']
) => MessageProps = (contentOrConfig, durationOrOnClose, onClose) => {
  let mergedConfig: MessageProps | null = null;
  if (
    contentOrConfig &&
    typeof contentOrConfig === 'object' &&
    'content' in contentOrConfig
  ) {
    mergedConfig = contentOrConfig;
  } else {
    mergedConfig = {
      content: contentOrConfig
    };
    if (durationOrOnClose !== null && durationOrOnClose !== undefined) {
      if (typeof durationOrOnClose === 'number') {
        mergedConfig.duration = durationOrOnClose;
        mergedConfig.onClose = onClose;
      } else {
        mergedConfig.onClose = durationOrOnClose;
      }
    }
  }
  return mergedConfig;
};

const openMessage: OpenMessage<MessageProps> = (
  contentOrConfig,
  durationOrOnClose,
  onClose
) => {
  const mergedConfig: MessageProps | null = formatMessageProp(
    contentOrConfig,
    durationOrOnClose,
    onClose
  );

  if (!globalMessage) {
    const fragment = document.createDocumentFragment();
    globalMessage = {
      fragment
    };
    const root = createRoot(fragment);
    root.render(
      <Instance
        ref={(node: any) => {
          if (globalMessage !== null) {
            globalMessage.instance = node.instance;
            open(mergedConfig!);
          }
        }}
      />
    );
    return;
  }
  open(mergedConfig!);
};

const openTypeMessage: OpenMessage<MessageTypeProps> = (
  contentOrConfig,
  durationOrOnClose,
  onClose
) => {
  const mergedConfig: MessageProps | null = formatMessageProp(
    contentOrConfig,
    durationOrOnClose,
    onClose
  );
  openMessage(mergedConfig);
};

const messageMethods: MessageMethods = {
  open: openMessage
} as MessageMethods;

messageType.forEach((item) => {
  messageMethods[item] = (contentOrConfig, durationOrOnClose, onClose) => {
    const mergedConfig: MessageProps | null = formatMessageProp(
      contentOrConfig,
      durationOrOnClose,
      onClose
    );
    mergedConfig.type = item;
    openTypeMessage(mergedConfig);
  };
});

export default messageMethods;
