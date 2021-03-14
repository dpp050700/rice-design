import React from 'react';
import classnames from 'classnames';
import { ConfigContext } from '../config-provider/context';

interface BaseIconProps {
  type?: string;
  name: String;
}

type NativeIProps = { onClick?: React.MouseEventHandler<HTMLElement> } & BaseIconProps &
  React.HTMLAttributes<HTMLElement>;

export type IconProps = Partial<NativeIProps>;

const Alert: React.FC<IconProps> = (props: IconProps) => {
  const { getPrefixClass } = React.useContext(ConfigContext);
  const { name, type, ...restProps } = props;
  const prefixClass = getPrefixClass('icon');
  const classes = classnames(prefixClass, {
    [`${prefixClass}-${name}`]: name,
    [`${prefixClass}--${type}`]: type,
  });
  return <i className={classes} {...restProps} />;
};

export default Alert;
