import { NotifyOpenConfig, Placement } from '../hooks/useNotity';
import React from 'react';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export type NotificationPlacement = Placement;

export interface OpenConfig extends NotifyOpenConfig {
  type?: NotificationType;
  title?: React.ReactNode;
  placement?: NotificationPlacement;
}
