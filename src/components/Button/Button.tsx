import React from 'react';
import classnames from 'classnames';
import { tuple } from '../_utils/type';
import { ConfigContext } from '../config-provider/context';

const ButtonSizes = tuple('default', 'medium', 'small', 'mini');
export type ButtonSize = typeof ButtonSizes[number];

const ButtonTypes = tuple('default', 'primary', 'success', 'warning', 'info', 'danger');
export type ButtonType = typeof ButtonTypes[number];

interface BaseButtonProps {
  size?: ButtonSize;
  type?: ButtonType;
  plain?: Boolean;
  plainest?: Boolean;
  disabled?: Boolean;
  circle?: Boolean;
  round?: Boolean;
  // icon?: String;
  children?: React.ReactNode;
}

type NativeButtonProps = { onClick?: React.MouseEventHandler<HTMLElement> } & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;
export type ButtonProps = Partial<NativeButtonProps>;

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { getPrefixClass } = React.useContext(ConfigContext);
  const prefixClass = getPrefixClass('button');
  const { size, plain, plainest, disabled, type, round, circle, children, ...restProps } = props;
  const btnClass = classnames(prefixClass, {
    [`${prefixClass}--${type}`]: type,
    [`${prefixClass}--${size}`]: size,
    [`is-plain`]: plain,
    [`is-plainest`]: plainest,
    [`is-disabled`]: disabled,
    [`is-round`]: round,
    [`is-circle`]: circle,
  });
  return (
    <button type="button" className={btnClass} {...restProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'default',
  plain: false,
  plainest: false,
  disabled: false,
  circle: false,
  round: false,
};

export default Button;
