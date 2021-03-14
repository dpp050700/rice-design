import React from 'react';

export interface ConfigConsumerProps {
  getPrefixClass: (suffix?: string, custom?: string) => string;
}

const getPrefixClasss = (suffix?: string, custom?: string) => {
  if (custom) return custom;
  return suffix ? `tracy-${suffix}` : 'tracy';
};

export const ConfigContext = React.createContext<ConfigConsumerProps>({
  getPrefixClass: getPrefixClasss,
});
