import React from 'react'
import classnames from 'classnames'

interface BaseButtonProps {
  size?: String,
  plain?: Boolean,
  plainest?: Boolean,
  disabled?: Boolean,
  type?: String,
  loading?: Boolean,
  circle?: Boolean,
  round?: Boolean,
  icon?: String,
  children?: React.ReactNode
}

const Button: React.FC<BaseButtonProps> = (props: BaseButtonProps) => {
  const {size,plain,plainest,disabled,type,round,children} = props
  const btnClass = classnames('btn', {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    [`btn-plain`]: plain,
    [`btn-plainest`]: plainest,
    [`btn-${disabled}`]: disabled,
    [`btn-${round}`]: round
  })
  return (
    <button className={btnClass}>{children}</button>
  )
}

Button.defaultProps = {
  type: 'default'
};

export default Button