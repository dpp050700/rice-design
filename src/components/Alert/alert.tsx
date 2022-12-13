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
  onClose?: React.MouseEventHandler<HTMLDivElement>;
}

const IconNode = ({ icon }: { icon: string | React.ReactNode }) => {
  const element = typeof icon === 'string' ? <Icon name={icon} /> : icon;
  return <div className="alert-icon">{element}</div>;
};

interface CloseContextProps {
  closeContent?: AlertProps['closeContent'];
  closeable: AlertProps['closeable'];
  onClose?: AlertProps['onClose'];
}

const CloseContext = ({
  closeContent,
  closeable,
  onClose
}: CloseContextProps) => {
  if (!closeable) {
    return null;
  }
  return (
    <div className="alert-close" onClick={onClose}>
      {closeContent ? closeContent : <Icon name="close" />}
    </div>
  );
};

const Alert: React.FC<AlertProps> = (props) => {
  const [closed, setClosed] = React.useState(false);
  const {
    className,
    title,
    description,
    icon,
    type,
    closeContent,
    closeable,
    plain,
    showIcon,
    onClose
  } = props;
  const classes = classnames(className, 'alert', {
    [`alert--${type}`]: type,
    [`is-plain`]: plain
  });

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    setClosed(true);
    onClose?.(e);
  };

  if (closed) {
    return null;
  }

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
        <CloseContext
          closeable={closeable}
          closeContent={closeContent}
          onClose={handleClose}
        />
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
