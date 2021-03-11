import React from 'react';
import Button from './components/Button/Button'

const App: React.FC = () => {
  return (
    <div>
      <Button type="primary" plain>默认按钮</Button>
      <Button type="primary" plainest>默认按钮</Button>
      <Button size="medium">中等按钮</Button>
      <Button size="small">小型按钮</Button>
      <Button size="mini">超小按钮</Button>
      <Button type="success">默认按钮</Button>
      <Button type="danger">中等按钮</Button>
      <Button type="warning">小型按钮</Button>
      <Button type="info" plain>超小按钮</Button>
    </div>
  );
}

export default App;
