import React from 'react';
import ButtonDemo from './demo/button';
import TagDemo from './demo/tag';
import IconDemo from './demo/icon';
import MessageDemo from './demo/message';
import AlertDemo from './demo/alert';
import NotificationDemo from './demo/notification';

const demo: any = {
  ButtonDemo,
  IconDemo,
  TagDemo,
  AlertDemo,
  MessageDemo,
  NotificationDemo
};

function App() {
  const pathName = window.location.pathname.replace('/', '');
  const demoName: any = pathName[0].toUpperCase() + pathName.slice(1) + 'Demo';
  return React.createElement(demo[demoName]);
}

export default App;
