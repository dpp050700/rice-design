import React from 'react';
import { OpenConfig } from './interface';
import { NotifyAPI, NotifyKey, useNotify } from '../hooks/useNotity';
import NotificationUI from './NotificationUI';

const PREFIX_CLS = 'rice-notification';

let indexKey = 0;

interface GlobalWrapper {
  instance: NotifyAPI;
}

export interface NotificationAPI {
  open: (config: OpenConfig) => void;
  success: (config: OpenConfig) => void;
  error: (config: OpenConfig) => void;
  info: (config: OpenConfig) => void;
  warning: (config: OpenConfig) => void;
}

const GlobalWrapper = React.forwardRef<GlobalWrapper>((props, ref) => {
  const [apis, wrapper] = useNotify({ prefixCls: PREFIX_CLS });
  React.useImperativeHandle(ref, () => {
    return {
      ...apis,
      prefixCls: PREFIX_CLS
    } as any;
  });
  return <>{wrapper}</>;
});
GlobalWrapper.displayName = 'GlobalWrapper';

function useNotification(): [NotificationAPI, React.ReactElement] {
  const wrapRef = React.useRef<any>(null);
  const api: NotificationAPI = React.useMemo<NotificationAPI>(() => {
    const open = (config: OpenConfig) => {
      const { open: originOpen, prefixCls } = wrapRef.current;

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
          prefixCls={prefixCls}
        />
      );
      let key: NotifyKey;
      if (originKey === null || originKey === undefined) {
        key = `notification-${indexKey}`;
        indexKey++;
      } else {
        key = originKey;
      }

      originOpen({
        content,
        key,
        ...restConfig
      });

      // wrapRef.current.instance.open(config);
    };
    return { open } as any;
  }, []);
  return [api, <GlobalWrapper ref={wrapRef} key="wrap" />];
}

export default useNotification;
