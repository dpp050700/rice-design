import React from 'react';
import classnames from 'classnames';
import Icon from '../Icon/icon';

export type AlertType = 'success' | 'error' | 'warning' | 'info';

const iconMap: Record<AlertType, string> = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info'
};

interface AlertProps {
  className?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode | string;
  type?: AlertType;
  closeable?: boolean;
  closeContent?: React.ReactNode;
  plain?: boolean;
  showIcon?: boolean;
}

const IconNode = ({ icon }: { icon: string | React.ReactNode }) => {
  const element = typeof icon === 'string' ? <Icon name={icon} /> : icon;
  return <div className="alert-icon">{element}</div>;
};

interface CloseContextProps {
  closeContent?: AlertProps['closeContent'];
  closeable: AlertProps['closeable'];
}

const CloseContext = ({ closeContent, closeable }: CloseContextProps) => {
  if (!closeable) {
    return null;
  }
  return (
    <div className="alert-close">
      {closeContent ? closeContent : <Icon name="close" />}
    </div>
  );
};

const Alert: React.FC<AlertProps> = (props) => {
  const {
    className,
    title,
    description,
    icon,
    type,
    closeContent,
    closeable,
    plain,
    showIcon
  } = props;
  const classes = classnames(className, 'alert', {
    [`alert-${type}`]: type,
    [`alert-${plain}`]: plain
  });

  return (
    <div className={classes}>
      {showIcon ? <IconNode icon={icon ?? iconMap[type!]} /> : null}
      <div className="alert-content">
        <div className="alert-title">{title}</div>
        {description ? (
          <div className="alert-description">{description}</div>
        ) : null}
      </div>
      {closeable ? (
        <CloseContext closeable={closeable} closeContent={closeContent} />
      ) : null}
    </div>
  );
};

Alert.defaultProps = {
  type: 'success',
  showIcon: true,
  closeable: true
};

export default Alert;
