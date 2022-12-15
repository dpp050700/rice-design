import React from 'react';

interface MessageItemProps {
  className?: string;
  icon?: React.ReactNode;
  content: string;
  duration?: number;
  eventKey: React.Key;
  onClose?: (key: React.Key) => void;
}

const MessageItem: React.FC<MessageItemProps> = (props) => {
  const { content, duration, eventKey, onClose } = props;

  React.useEffect(() => {
    if (duration! > 0) {
      const timer = setTimeout(() => {
        onClose?.(eventKey);
      }, duration! * 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [duration]);

  return (
    <div className="message-content">
      <div className="message-content__inner">{content}</div>
    </div>
  );
};

MessageItem.defaultProps = {
  duration: 4.5
};

export default MessageItem;
