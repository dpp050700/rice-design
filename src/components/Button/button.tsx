import React from 'react';
import classnames from 'classnames';

export type ButtonSize = 'large' | 'medium' | 'small' | 'default';

export type ButtonType = 'primary' | 'default' | 'danger' | 'warning' | 'info';

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  plain?: boolean;
  text?: boolean;
  round?: boolean;
  circle?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<BaseButtonProps> = (props) => {
  const { type, disabled, size, plain, text, round, circle, children } = props;
  const classes = classnames('btn', {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    'is-plain': plain,
    'is-text': text,
    'is-disabled': disabled,
    'is-round': round,
    'is-circle': circle
  });

  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  text: false,
  disabled: false,
  type: 'default',
  size: 'default'
};

export default Button;
