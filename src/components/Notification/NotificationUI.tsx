import React from 'react';
import { NotificationType } from './interface';

interface NotificationUIProps {
  prefixCls?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  type?: NotificationType;
  showIcon?: boolean;
  icon?: React.ReactNode;
}

const NotificationUI: React.FC<NotificationUIProps> = (props) => {
  const { prefixCls, title, description } = props;
  return (
    <div>
      <div className={`${prefixCls}-notify-title`}>{title}</div>
      <div className={`${prefixCls}-notify-description`}>{description}</div>
    </div>
  );
};

export default NotificationUI;
