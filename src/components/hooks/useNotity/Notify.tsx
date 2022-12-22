import React from 'react';
import { NotifyProps } from './interface';
import classnames from 'classnames';

const Notify: React.FC<NotifyProps> = (props) => {
  const {
    content,
    duration,
    eventKey,
    prefixCls: originPrefixCls,
    closeable,
    closeIcon,
    closeNotify
  } = props;

  React.useEffect(() => {
    if (duration! > 0) {
      const timer = setTimeout(() => {
        closeNotify?.(eventKey);
      }, duration! * 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [duration]);

  const onClickClose = () => {
    closeNotify?.(eventKey);
  };

  const prefixCls = `${originPrefixCls}-notify`;

  return (
    <div
      className={classnames(prefixCls, {
        [`${prefixCls}-closeable`]: closeable
      })}
    >
      <div className={`${prefixCls}-content`}>{content}</div>
      {closeable ? (
        <span
          className={`${prefixCls}-close`}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onClickClose();
          }}
        >
          {closeIcon}
        </span>
      ) : null}
    </div>
  );
};

Notify.defaultProps = {
  duration: 300,
  closeable: true,
  closeIcon: <i className="rice-icon-close"></i>
};

export default Notify;
