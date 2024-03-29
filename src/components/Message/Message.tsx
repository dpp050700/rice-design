import React from 'react';
import classnames from 'classnames';
import { MessageProps, MessageType } from './interface';

interface MessageItemProps extends Omit<MessageProps, 'onClose'> {
  eventKey: React.Key;
  onClose?: (key: React.Key) => void;
}

const IconMap: Record<MessageType, React.ReactElement> = {
  success: <i className="rice-icon-success"></i>,
  error: <i className="rice-icon-error"></i>,
  warning: <i className="rice-icon-warning"></i>,
  info: <i className="rice-icon-info"></i>,
  loading: <i className="rice-icon-loading"></i>
};

const MessageItem: React.FC<MessageItemProps> = (props) => {
  const { content, duration, eventKey, showIcon, icon, type, effect, onClose } =
    props;

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

  const MessageIcon = () => {
    if (!showIcon) {
      return null;
    }
    if (!icon) {
      return !type ? null : IconMap[type];
    }
    return <>{icon}</>;
  };

  const messageCls = classnames('message-content', {
    [`message--${effect}`]: effect,
    [`message--${type}`]: type
  });

  return (
    <div className={messageCls}>
      <div className="message-content__inner">
        {showIcon && (
          <span className="message-icon">
            <MessageIcon />
          </span>
        )}
        {content}
      </div>
    </div>
  );
};

MessageItem.defaultProps = {
  duration: 3,
  showIcon: true,
  effect: 'light'
};

export default MessageItem;
