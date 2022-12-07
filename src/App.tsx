import React from 'react';
import Button from './components/Button/button';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Size</h1>
        <Button size="large">large</Button>
        <Button size="default">default</Button>
        <Button size="medium">medium</Button>
        <Button size="small">small</Button>
      </div>
      <div>
        <h1>type</h1>
        <Button type="default">default</Button>
        <Button type="primary">primary</Button>
        <Button type="danger">danger</Button>
        <Button type="warning">warning</Button>
        <Button type="info">info</Button>
      </div>
      <div>
        <h1>plain</h1>
        <Button type="default" plain={true}>
          default
        </Button>
        <Button type="primary" plain={true}>
          primary
        </Button>
        <Button type="danger" plain={true}>
          danger
        </Button>
        <Button type="warning" plain={true}>
          warning
        </Button>
        <Button type="info" plain={true}>
          info
        </Button>
      </div>
    </div>
  );
}

export default App;
