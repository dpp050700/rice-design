import React from 'react';
import { NotifyAPI } from './interface';
import NotifyWrapper from './NotifyWrapper';

type WrapperRef = NotifyAPI;

function useNotify(): [NotifyAPI, React.ReactElement] {
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

  const wrapper = <NotifyWrapper ref={wrapperRef} />;

  return [notifyApi, wrapper];
}

export default useNotify;
