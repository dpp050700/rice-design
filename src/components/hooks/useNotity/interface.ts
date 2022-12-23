import React from 'react';

export type NotifyKey = React.Key;

export type Placement =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight';

export interface NotifyAPI {
  open: (config: NotifyOpenConfig) => void;
  close: (key: NotifyKey) => void;
  destroy: () => void;
}

export interface NotifyWrapperProps {
  className?: string;
  prefixCls?: string;
  container?: HTMLElement;
  maxCount?: number;
}

export interface NotifyOpenConfig extends NotifyConfig {
  key: NotifyKey;
  placement?: Placement;
}

export interface NotifyConfig {
  content: React.ReactNode;
  duration?: number;
  closeable?: boolean;
  closeIcon?: React.ReactNode;
  onClose?: () => void;
}

export interface NotifyProps extends Omit<NotifyConfig, 'onClose'> {
  prefixCls?: string;
  closeNotify?: (key: NotifyKey) => void;
  eventKey: NotifyKey;
}

export interface UseNotifyConfig {
  prefixCls?: string;
  container?: HTMLElement;
  closeable?: boolean;
  closeIcon?: React.ReactNode;
  maxCount?: number;
  duration?: number;
}
