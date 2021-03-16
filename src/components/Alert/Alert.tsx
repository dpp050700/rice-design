import React, { useState } from 'react';
import classnames from 'classnames';
import { ConfigContext } from '../config-provider/context';
import Icon from '../Icon/Icon';
import { tuple, Omit } from '../_utils/type';

const AlertTypes = tuple('primary', 'success', 'warning', 'info', 'error');
export type AlertType = typeof AlertTypes[number];

const EffectTypes = tuple('light', 'dark');
export type EffectType = typeof EffectTypes[number];

interface BaseAlertProps {
  type?: AlertType;
  title: React.ReactNode;
  description?: React.ReactNode;
  closable?: boolean;
  closeText?: React.ReactNode;
  showIcon?: boolean;
  iconName?: string;
  icon?: React.ReactNode;
  effect?: EffectType;
  onClose?: () => void;
}

type NativeAlertProps = BaseAlertProps & Omit<React.ButtonHTMLAttributes<any>, 'title' | 'type'>;
export type AlertProps = Partial<NativeAlertProps>;

const Alert: React.FC<AlertProps> = (props: AlertProps) => {
  const { getPrefixClass, joinlass } = React.useContext(ConfigContext);
  const [showFlag, setShowFlag] = useState(true);
  const {
    className,
    type,
    title,
    description,
    closable,
    closeText,
    showIcon,
    icon,
    iconName,
    effect,
    onClose,
  } = props;
  const prefixClass = getPrefixClass('alert');
  const iconClass = classnames(joinlass(prefixClass, 'icon'), {
    'is-big': description,
  });
  const classes = classnames(prefixClass, className, {
    [`${prefixClass}--${type}`]: type,
    [`is-${effect}`]: effect,
  });
  const contentClass = classnames(joinlass(prefixClass, 'content'));
  const closeBtnClass = classnames(joinlass(prefixClass, 'close'));
  const closeIconClass = classnames(joinlass(prefixClass, 'close__icon'));
  const titleClass = classnames(joinlass(prefixClass, 'title'));
  const descriptionClass = classnames(joinlass(prefixClass, 'description'));

  function getIconNode() {
    if (showIcon) {
      if (icon) return icon;
      if (iconName) return <Icon className={iconClass} name={iconName} />;
      if (type === 'primary') return <Icon className={iconClass} name="success" />;
      return <Icon className={iconClass} name={type} />;
    }
    return null;
  }

  function onClickClose() {
    setShowFlag(false);
    if (onClose) {
      onClose();
    }
  }

  return showFlag ? (
    <div className={classes}>
      {getIconNode()}
      <div className={contentClass}>
        <div className={titleClass}>{title}</div>
        {description ? <div className={descriptionClass}>{description}</div> : null}
      </div>
      {closable ? (
        <button className={closeBtnClass} onClick={onClickClose}>
          {closeText || <Icon name="close" className={closeIconClass} />}
        </button>
      ) : null}
    </div>
  ) : null;
};

Alert.defaultProps = {
  type: 'primary',
  showIcon: true,
  effect: 'dark',
  closable: true,
};

export default Alert;
