import React from 'react';
import Button from './components/Button/Button'

const App: React.FC = () => {
  return (
    <div>
      <div>
        <h2>Primary</h2>
        <Button>默认按钮</Button>
        <Button type="primary">默认按钮</Button>
        <Button type="primary" plain>默认按钮</Button>
        <Button type="primary" plainest>默认按钮</Button>
        <Button type="primary" plainest size="medium">默认按钮</Button>
        <Button type="primary" plainest size="small">默认按钮</Button>
        <Button type="primary" plainest size="mini">默认按钮</Button>
        <Button type="primary" round>默认按钮</Button>
        <Button type="primary" circle><span style={{width: '14px',display:'inline-block'}}>1</span></Button>
      </div>
      <div>
        <h2>Success</h2>
        <Button type="success">默认按钮</Button>
        <Button type="success" plain>默认按钮</Button>
        <Button type="success" plainest>默认按钮</Button>
      </div>
      <div>
        <h2>Warning</h2>
        <Button type="warning">默认按钮</Button>
        <Button type="warning" plain>默认按钮</Button>
        <Button type="warning" plainest>默认按钮</Button>
      </div>
      <div>
        <h2>Info</h2>
        <Button type="info">默认按钮</Button>
        <Button type="info" plain>默认按钮</Button>
        <Button type="info" plainest>默认按钮</Button>
      </div>
      <div>
        <h2>Danger</h2>
        <Button type="danger">默认按钮</Button>
        <Button type="danger" plain>默认按钮</Button>
        <Button type="danger" plainest>默认按钮</Button>
      </div>
      <div>
        <h2>Disabled</h2>
        <Button type="primary" disabled>默认按钮</Button>
        <Button type="success" disabled>默认按钮</Button>
        <Button type="info" disabled>默认按钮</Button>
        <Button type="warning" disabled>默认按钮</Button>
        <Button type="danger" disabled>默认按钮</Button>
        <Button type="danger" plain disabled>默认按钮</Button>
        <Button type="danger" plainest disabled>默认按钮</Button>
      </div>
    </div>
  );
}

export default App;
