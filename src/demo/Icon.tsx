import React from 'react';
import Icon from '../components/Icon/Icon';
import icons from '../icon.json';

const IconDemo: React.FC = () => {
  return (
    <div>
      {icons.map(item => (
        <Icon
          name={item}
          key={item}
          onClick={() => {
            console.log(123);
          }}
          style={{ cursor: 'pointer', fontSize: '20px' }}
        />
      ))}
    </div>
  );
};
export default IconDemo;
