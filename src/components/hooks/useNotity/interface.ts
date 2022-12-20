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

export interface NotifyOpenConfig {
  key: NotifyKey;
  duration?: number;
  content: React.ReactNode;
  onClose?: () => void;
  placement?: Placement;
}
