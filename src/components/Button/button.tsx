import React from 'react';
import classnames from 'classnames';

export type ButtonSize = 'large' | 'medium' | 'small' | 'default';

export type ButtonType =
  | 'primary'
  | 'default'
  | 'danger'
  | 'link'
  | 'warning'
  | 'info';

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  href?: string;
  children: React.ReactNode;
}

const Button: React.FC<BaseButtonProps> = (props) => {
  const { type, disabled, size, href, plain, children } = props;
  const classes = classnames('btn', {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    'is-disabled': type === 'link' && disabled,
    'is-plain': !!plain
  });
  if (type === 'link' && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  type: 'default',
  size: 'default'
};

export default Button;
