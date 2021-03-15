import React from 'react';
import Alert from '../components/Alert/Alert';

const App: React.FC = () => {
  const title = (
    <div>
      123s<span>222223</span>
    </div>
  );
  return (
    <div>
      <Alert title={title} />
    </div>
  );
};

export default App;
