import React from 'react';
import { NotifyAPI } from './interface';
import NotifyWrapper from './NotifyWrapper';

type WrapperRef = NotifyAPI;

interface NotifyConfig {
  prefixCls?: string;
}

function useNotify(rootConfig?: NotifyConfig): [NotifyAPI, React.ReactElement] {
  const { prefixCls } = rootConfig || {};
  const notifyApi: NotifyAPI = {
    open(config) {
      wrapperRef.current?.open(config);
    },
    close(key) {
      wrapperRef.current?.close(key);
    },
    destroy() {
      wrapperRef.current?.destroy();
    }
  };

  const wrapperRef = React.useRef<WrapperRef>(null);

  const wrapper = <NotifyWrapper ref={wrapperRef} prefixCls={prefixCls} />;

  return [notifyApi, wrapper];
}

export default useNotify;
