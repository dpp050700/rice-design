import React from 'react';
import classnames from 'classnames';

interface IconProps {
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = (props) => {
  const { className, name } = props;
  const classes = classnames(className, `rice-icon-${name}`);

  return <i className={classes}></i>;
};

Icon.defaultProps = {};

export default Icon;
