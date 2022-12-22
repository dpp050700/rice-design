import React from 'react';

import { NotifyKey, NotifyOpenConfig, Placement } from '../hooks/useNotity';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export type NotificationPlacement = Placement;

export interface OpenConfig extends Omit<NotifyOpenConfig, 'key'> {
  type?: NotificationType;
  title?: React.ReactNode;
  placement?: NotificationPlacement;
  key?: NotifyKey;
}
