import React from 'react';
import classnames from 'classnames';

export type AlertType = 'primary' | 'danger' | 'warning' | 'info';

interface AlertProps {
  className?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  type?: AlertType;
  closeable?: boolean;
  plain?: boolean;
  showIcon?: boolean;
}

const Alert: React.FC<AlertProps> = (props) => {
  const { className } = props;
  const classes = classnames(className);

  return <i className={classes}></i>;
};

Alert.defaultProps = {};

export default Alert;
