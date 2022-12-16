import React from 'react';

export type MessageType = 'success' | 'error' | 'info' | 'warning' | 'loading';

export interface MessageProps {
  className?: string;
  type?: MessageType;
  content: string;
  duration?: number;
  icon?: React.ReactNode;
  key?: string | number;
  onClose?: () => void;
  showIcon?: boolean;
  effect?: 'dark' | 'light' | 'plain';
}
