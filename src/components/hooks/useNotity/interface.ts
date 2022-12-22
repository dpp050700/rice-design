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

export interface NotifyConfig {
  prefixCls?: string;
  closeable?: boolean;
  closeIcon?: React.ReactNode;
  maxCount?: number;
  duration?: number;
}

export interface NotifyOpenConfig {
  key: NotifyKey;
  duration?: number;
  content: React.ReactNode;
  onClose?: () => void;
  placement?: Placement;
}

export interface NotifyProps {
  prefixCls?: string;
  content: React.ReactNode;
  duration?: number;
  closeNotify?: (key: NotifyKey) => void;
  eventKey: NotifyKey;
  closeable?: boolean;
  closeIcon?: React.ReactNode;
}
