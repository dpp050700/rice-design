import React from 'react';
import classnames from 'classnames';
import { lightColor } from '../../utils/color';

export type TagSize = 'large' | 'medium' | 'small' | 'default';

export type TagType = 'primary' | 'success' | 'danger' | 'warning' | 'info';

export type TagEffect = 'dark' | 'light' | 'plain';

interface TagProps {
  className?: string;
  size?: TagSize;
  type?: TagType;
  effect?: TagEffect;
  color?: string;
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = (props) => {
  const { className, type, size, effect, color, children } = props;
  const classes = classnames('tag', className, {
    [`tag-${type}`]: type,
    [`tag-${size}`]: size,
    [`tag--${effect}`]: effect
  });

  let colorStyle = {};

  if (effect === 'plain' && color) {
    colorStyle = {
      backgroundColor: '#fff',
      borderColor: color,
      color: color
    };
  }

  if (effect === 'dark' && color) {
    colorStyle = {
      backgroundColor: color,
      borderColor: color,
      color: '#fff'
    };
  }

  if (effect === 'light' && color) {
    colorStyle = {
      backgroundColor: lightColor(0.9, color),
      borderColor: color,
      color: color
    };
  }

  return (
    <span className={classes} style={{ ...colorStyle }}>
      {children}
    </span>
  );
};

Tag.defaultProps = {
  effect: 'light',
  type: 'primary',
  size: 'default'
};

export default Tag;
