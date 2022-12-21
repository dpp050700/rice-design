import React from 'react';
import { createRoot } from 'react-dom/client';
import { OpenConfig, NotificationType } from './interface';
import NotificationUI from './NotificationUI';

import { useNotify } from '../hooks/useNotity';
import type {
  NotifyOpenConfig,
  NotifyKey,
  NotifyAPI
} from '../hooks/useNotity';

const PREFIX_CLS = 'rice-notification';

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
  const [apis, wrapper] = useNotify({ prefixCls: PREFIX_CLS });
  React.useImperativeHandle(ref, () => {
    return {
      instance: apis
    };
  });
  return <>{wrapper}</>;
});
GlobalWrapper.displayName = 'GlobalWrapper';

function createOpenTask(config: OpenConfig): Task {
  const {
    content: originContent,
    key: originKey,
    title,
    ...restConfig
  } = config;
  const content = (
    <NotificationUI
      title={title}
      description={originContent}
      prefixCls={PREFIX_CLS}
    />
  );
  let key: NotifyKey;
  if (originKey === null || originKey === undefined) {
    key = `notification-${indexKey}`;
    indexKey++;
  } else {
    key = originKey;
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
