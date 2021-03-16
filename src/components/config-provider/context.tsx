import React from 'react';

export interface ConfigConsumerProps {
  getPrefixClass: (suffix?: string, custom?: string) => string;
  joinlass: (suffix: string, content: string) => string;
}

const getPrefixClass = (suffix?: string, custom?: string) => {
  if (custom) return custom;
  return suffix ? `tracy-${suffix}` : 'tracy';
};
const joinlass = (suffix: string, content: string, space = '__') => {
  return `${suffix}${space}${content}`;
};

export const ConfigContext = React.createContext<ConfigConsumerProps>({
  getPrefixClass,
  joinlass,
});
