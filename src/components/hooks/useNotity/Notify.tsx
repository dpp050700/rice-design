import React from 'react';
import { NotifyKey } from './interface';

interface NotifyProps {
  content: React.ReactNode;
  duration?: number;
  closeNotify?: (key: NotifyKey) => void;
  eventKey: NotifyKey;
}

const Notify: React.FC<NotifyProps> = (props) => {
  const { content, duration, eventKey, closeNotify } = props;

  React.useEffect(() => {
    if (duration! > 0) {
      const timer = setTimeout(() => {
        closeNotify?.(eventKey);
      }, duration! * 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [duration]);

  return <>{content}</>;
};

Notify.defaultProps = {
  duration: 3
};

export default Notify;
