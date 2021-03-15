import React from 'react';
import classnames from 'classnames';
import { ConfigContext } from '../config-provider/context';
import Icon from '../Icon/Icon';
import { tuple } from '../_utils/type';

const AlertTypes = tuple('primary', 'success', 'warning', 'info', 'danger');
export type AlertType = typeof AlertTypes[number];

interface AlertProps {
  type?: AlertType;
  title: React.ReactNode;
  description?: React.ReactNode;
  closable?: boolean;
  center?: boolean;
  closeText?: React.ReactNode;
  showIcon?: boolean;
  iconName?: string;
  icon?: React.ReactNode;
}

const Alert: React.FC<AlertProps> = (props: AlertProps) => {
  const { getPrefixClass } = React.useContext(ConfigContext);
  const { type, center, title, description, closable, closeText, showIcon, icon, iconName } = props;
  const prefixClass = getPrefixClass('alert');
  const classes = classnames(prefixClass, {
    [`${prefixClass}--${type}`]: type,
    'is-center': center,
  });

  function getIconNode() {
    if (showIcon) {
      if (icon) return icon;
      if (iconName) return <Icon name={iconName} />;
      if (type === 'primary') return <Icon name="info" />;
      return <Icon name={type} />;
    }
    return null;
  }

  return (
    <div className={classes}>
      {getIconNode()}
      <div className="content">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
      {closable ? <div>{closeText || '关闭'}</div> : null}
    </div>
  );
};

Alert.defaultProps = {
  type: 'primary',
  showIcon: true,
};

export default Alert;
