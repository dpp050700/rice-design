import React from 'react';
import classnames from 'classnames';

export type ButtonSize = 'large' | 'medium' | 'small' | 'default';

export type ButtonType = 'primary' | 'default' | 'danger' | 'warning' | 'info';

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement>;

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  block?: boolean;
  plain?: boolean;
  text?: boolean;
  round?: boolean;
  circle?: boolean;
  children: React.ReactNode;
  nativeType?: 'button' | 'submit' | 'reset';
}

export type ButtonProps = BaseButtonProps &
  Partial<Omit<NativeButtonProps, 'type'>>;

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    type,
    disabled,
    size,
    plain,
    text,
    block,
    round,
    circle,
    nativeType,
    children,
    ...restProps
  } = props;
  const classes = classnames('btn', className, {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    'is-plain': plain,
    'is-text': text,
    'is-disabled': disabled,
    'is-round': round,
    'is-circle': circle,
    'is-block': block
  });

  return (
    <button
      className={classes}
      disabled={disabled}
      type={nativeType}
      {...restProps}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  text: false,
  disabled: false,
  type: 'default',
  size: 'default',
  nativeType: 'button',
  block: false
};

export default Button;
