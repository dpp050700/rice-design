import React from 'react';
import classnames from 'classnames';

interface AlertProps {
  className?: string;
}

const Alert: React.FC<AlertProps> = (props) => {
  const { className } = props;
  const classes = classnames(className);

  return <i className={classes}></i>;
};

Alert.defaultProps = {};

export default Alert;
