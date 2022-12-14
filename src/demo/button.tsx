import Button from '../components/Button/button';
import React from 'react';

const ButtonDemo = () => {
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
        <div className="space-vertical">
          <Button type="default" round={true}>
            default
          </Button>
          <Button type="primary" round={true}>
            primary
          </Button>
          <Button type="danger" round={true}>
            danger
          </Button>
          <Button type="warning" round={true}>
            warning
          </Button>
          <Button type="info" round={true}>
            info
          </Button>
        </div>
        <div className="space-vertical">
          <Button type="default" circle={true}>
            <div style={{ width: '40px', height: '40px', lineHeight: '40px' }}>
              按钮
            </div>
          </Button>
          <Button type="primary" circle={true}>
            <div style={{ width: '40px', height: '40px', lineHeight: '40px' }}>
              按钮
            </div>
          </Button>
          <Button type="danger" circle={true}>
            <div style={{ width: '40px', height: '40px', lineHeight: '40px' }}>
              按钮
            </div>
          </Button>
          <Button type="warning" circle={true}>
            <div style={{ width: '40px', height: '40px', lineHeight: '40px' }}>
              按钮
            </div>
          </Button>
          <Button type="info" circle={true}>
            <div style={{ width: '40px', height: '40px', lineHeight: '40px' }}>
              按钮
            </div>
          </Button>
        </div>
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
      <div>
        <h1>text</h1>
        <Button type="default" text={true}>
          default
        </Button>
        <Button type="primary" text={true}>
          primary
        </Button>
        <Button type="danger" text={true}>
          danger
        </Button>
        <Button type="warning" text={true}>
          warning
        </Button>
        <Button type="info" text={true}>
          info
        </Button>
      </div>
      <div>
        <h1>text & plain</h1>
        <Button type="default" text={true} plain={true}>
          default
        </Button>
        <Button type="primary" text={true} plain={true}>
          primary
        </Button>
        <Button type="danger" text={true} plain={true}>
          danger
        </Button>
        <Button type="warning" text={true} plain={true}>
          warning
        </Button>
        <Button type="info" text={true} plain={true}>
          info
        </Button>
      </div>
      <div>
        <h1>disabled</h1>
        <div className="space-vertical">
          <Button type="default" text={true} disabled={true}>
            default
          </Button>
          <Button type="primary" text={true} disabled={true}>
            primary
          </Button>
          <Button type="danger" text={true} disabled={true}>
            danger
          </Button>
          <Button type="warning" text={true} disabled={true}>
            warning
          </Button>
          <Button type="info" text={true} disabled={true}>
            info
          </Button>
        </div>
        <div className="space-vertical">
          <Button type="default" text={true} plain={true} disabled={true}>
            default
          </Button>
          <Button type="primary" text={true} plain={true} disabled={true}>
            primary
          </Button>
          <Button type="danger" text={true} plain={true} disabled={true}>
            danger
          </Button>
          <Button type="warning" text={true} plain={true} disabled={true}>
            warning
          </Button>
          <Button type="info" text={true} plain={true} disabled={true}>
            info
          </Button>
        </div>
        <div className="space-vertical">
          <Button type="default" disabled={true}>
            default
          </Button>
          <Button type="primary" disabled={true}>
            primary
          </Button>
          <Button type="danger" disabled={true}>
            danger
          </Button>
          <Button type="warning" disabled={true}>
            warning
          </Button>
          <Button type="info" disabled={true}>
            info
          </Button>
        </div>
        <div className="space-vertical">
          <Button type="default" disabled={true} plain={true}>
            default
          </Button>
          <Button type="primary" disabled={true} plain={true}>
            primary
          </Button>
          <Button type="danger" disabled={true} plain={true}>
            danger
          </Button>
          <Button type="warning" disabled={true} plain={true}>
            warning
          </Button>
          <Button type="info" disabled={true} plain={true}>
            info
          </Button>
        </div>
      </div>
      <div>
        <h1>Block</h1>
        <Button size="large" block={true}>
          large
        </Button>
        <div style={{ width: '200px' }} className="space-vertical">
          <Button size="default" block={true} round={true}>
            default
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonDemo;
