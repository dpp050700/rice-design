import React from 'react';
import { createRoot } from 'react-dom/client';
import { OpenConfig, NotificationType } from './interface';

import { useNotify } from '../hooks/useNotity';
import type {
  NotifyOpenConfig,
  NotifyKey,
  NotifyAPI
} from '../hooks/useNotity';

type Task =
  | { type: 'open'; config: NotifyOpenConfig }
  | { type: 'destroy'; key: NotifyKey };

interface GlobalNotification {
  fragment: DocumentFragment;
  instance?: NotifyAPI;
}

interface GlobalWrapper {
  instance: NotifyAPI;
}

const notificationsTypes: NotificationType[] = [
  'success',
  'error',
  'info',
  'warning'
];

let indexKey = 0;

let task: Task;

let notification: GlobalNotification | null = null;

const GlobalWrapper = React.forwardRef<GlobalWrapper>((props, ref) => {
  const [apis, wrapper] = useNotify();
  React.useImperativeHandle(ref, () => {
    return {
      instance: apis
    };
  });
  return <>{wrapper}</>;
});
GlobalWrapper.displayName = 'GlobalWrapper';

function createOpenTask(config: NotifyOpenConfig): Task {
  const { content: originContent, key: originKey, ...restConfig } = config;
  const content = <div>{originContent}</div>;
  let key: NotifyKey = originKey;
  if (originKey === null || originKey === undefined) {
    key = `notification-${indexKey}`;
    indexKey++;
  }
  return {
    type: 'open',
    config: {
      content,
      key,
      ...restConfig
    }
  };
}

function createDestroyTask(key: NotifyKey): Task {
  return {
    type: 'destroy',
    key
  };
}

function execTask() {
  if (!notification) {
    const wrapperFragment = document.createDocumentFragment();
    notification = {
      fragment: wrapperFragment
    };

    const root = createRoot(wrapperFragment);
    root.render(
      <GlobalWrapper
        ref={(node) => {
          const { instance } = node || {};
          if (!notification?.instance && instance) {
            notification!.instance = instance;
            execTask();
          }
        }}
      />
    );
    return;
  }
  if (!notification.instance) {
    return;
  }

  const { type } = task;
  switch (type) {
    case 'open':
      notification.instance.open(task.config);
      break;
    case 'destroy':
      notification.instance.destroy();
      break;
  }
}

function open(config: OpenConfig) {
  task = createOpenTask(config);
  execTask();
}

function destroy(key: NotifyKey) {
  task = createDestroyTask(key);
  execTask();
}

interface BasicStaticMethods {
  open: (config: OpenConfig) => void;
  destroy: (key: NotifyKey) => void;
}

type StaticMethods = BasicStaticMethods &
  Record<NotificationType, (config: Omit<OpenConfig, 'type'>) => void>;

const basicStaticMethods: BasicStaticMethods = {
  open,
  destroy
};

const staticMethods: StaticMethods = { ...basicStaticMethods } as StaticMethods;

notificationsTypes.forEach((type) => {
  staticMethods[type] = function (config) {
    open({
      ...config,
      type
    });
  };
});

export default staticMethods;
